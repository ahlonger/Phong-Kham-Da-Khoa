// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import logodoitac from "../assets/logodoitac2.jpg";
import Api from "../components/Api";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  address: "",
  serviceId: "",
  doctorId: "",
  note: "",
  datetime: "",
  agreed: false,
  gioitinh: "",
};

const parseServices = (res) => {
  const raw = res?.data ?? res;
  if (Array.isArray(raw)) return raw;
  if (Array.isArray(raw?.data)) return raw.data;
  if (Array.isArray(raw?.services)) return raw.services;
  if (Array.isArray(raw?.items)) return raw.items;
  return [];
};

const parseDoctors = (res) => {
  const raw = res?.data ?? res;
  if (Array.isArray(raw)) return raw;
  if (Array.isArray(raw?.data)) return raw.data;
  if (Array.isArray(raw?.doctors)) return raw.doctors;
  if (Array.isArray(raw?.items)) return raw.items;
  return [];
};

const currencyVN = (n) =>
  (Number.isFinite(+n) ? +n : 0).toLocaleString("vi-VN", { style: "currency", currency: "VND" });

/* ================= FIX: helpers cho datetime-local & khung giờ ================= */

// Lấy "YYYY-MM-DDTHH:mm" theo LOCAL (tránh lệch múi giờ khi dùng toISOString)
const localNowForDatetimeLocal = () => {
  const d = new Date();
  const pad = (x) => String(x).padStart(2, "0");
  const y = d.getFullYear();
  const m = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hh = pad(d.getHours());
  const mm = pad(d.getMinutes());
  return `${y}-${m}-${day}T${hh}:${mm}`;
};

// Parse "YYYY-MM-DDTHH:mm" (input datetime-local) thành Date theo local-time
const parseLocalDateTime = (str) => {
  if (!str) return null;
  const [datePart, timePart] = str.split("T");
  if (!datePart || !timePart) return null;
  const [y, m, d] = datePart.split("-").map(Number);
  const [hh, mm] = timePart.split(":").map(Number);
  return new Date(y, (m || 1) - 1, d || 1, hh || 0, mm || 0, 0, 0);
};

const minutesOfDay = (date) => date.getHours() * 60 + date.getMinutes();

/**
 * ✅ Chỉ hợp lệ trong 07:00–11:59 và 13:00–17:59
 */
const isWorkingHour = (date) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return false;
  const m = minutesOfDay(date);
  const inMorning = m >= 7 * 60 && m <= 11 * 60 + 59;   // 07:00–11:59
  const inAfternoon = m >= 13 * 60 && m <= 17 * 60 + 59; // 13:00–17:59
  return inMorning || inAfternoon;
};
/* ================= /helpers ================= */

const DatLich = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [services, setServices] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loadingSvc, setLoadingSvc] = useState(true);
  const [loadingDoc, setLoadingDoc] = useState(true);
  const [errSvc, setErrSvc] = useState("");
  const [errDoc, setErrDoc] = useState("");

  const navigate = useNavigate();
  // === Đặt cọc modal state ===
  const [depositOpen, setDepositOpen] = useState(false);
  const [depositing, setDepositing] = useState(false);
  const [depositAmount, setDepositAmount] = useState(0);
  const [newBooking, setNewBooking] = useState(null); // lưu booking vừa tạo (nếu cần gọi API deposit)

  const [timeError, setTimeError] = useState("");

  // 🔹 Lọc danh sách bác sĩ theo dịch vụ đang chọn
const filteredDoctors = React.useMemo(() => {
  if (!form.serviceId) return doctors; // nếu chưa chọn dịch vụ thì hiển thị tất cả
  return doctors.filter(
    (doc) => String(doc.dichvuId) === String(form.serviceId)
  );
}, [doctors, form.serviceId]);

  // Nạp email & dropdown
  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");
      if (storedUser?.email) {
        setForm((prev) => ({ ...prev, email: storedUser.email }));
      }
    } catch {}

    const token = (() => {
      try {
        const t = JSON.parse(localStorage.getItem("token") || "null");
        return t || localStorage.getItem("token") || undefined;
      } catch {
        return localStorage.getItem("token") || undefined;
      }
    })();

    const authCfg = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

    // Services
    (async () => {
      setLoadingSvc(true);
      setErrSvc("");
      try {
        const res = await Api.get("service", authCfg);
        const list = parseServices(res);
        const normalized = list
          .map((s) => ({
            id: s.id ?? s.serviceId ?? s._id,
            title: s.title ?? s.name ?? s.ten ?? "Không tên",
            price: s.price ?? s.gia,
          }))
          .filter((s) => s.id != null);
        setServices(normalized);
      } catch (e) {
        console.error("Lỗi tải dịch vụ:", e);
        setErrSvc("Không tải được danh sách dịch vụ.");
      } finally {
        setLoadingSvc(false);
      }
    })();

    // Doctors
    (async () => {
      setLoadingDoc(true);
      setErrDoc("");
      try {
        const res = await Api.get("user", authCfg);
        const list = parseDoctors(res);
        const onlyDocs = list.filter((d) => {
          const role = (d.role || "").toString().toLowerCase();
          const roleId = d.role_id ?? d.roleId;
          return role === "bacsi" || roleId === 2 || String(roleId) === "2";
        });
        const normalized = (onlyDocs.length ? onlyDocs : list)
          .map((d) => ({
            id: d.id ?? d.userId ?? d._id,
            name: d.name ?? d.fullName ?? d.hoten ?? "Không tên",
            email: d.email,
            dichvuId: d.dichvuId ?? d.dichvu?.id ?? null,
          }))
          .filter((d) => d.id != null);
        setDoctors(normalized);
      } catch (e) {
        console.error("Lỗi tải bác sĩ:", e);
        setErrDoc("Không tải được danh sách bác sĩ.");
      } finally {
        setLoadingDoc(false);
      }
    })();
  }, []);

  /* ============== FIX: handleSubmit dùng selectedDate SAU khi đã khai báo ============== */
  const handleSubmit = async () => {
    const { name, email, phone, address, serviceId, doctorId, note, datetime, agreed, gioitinh } = form;

    if (!name || !email || !phone || !address || !serviceId || !doctorId || !datetime || !agreed || !gioitinh) {
      alert("Vui lòng điền đầy đủ thông tin và đồng ý điều khoản!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email không hợp lệ. Vui lòng nhập đúng định dạng.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Số điện thoại phải gồm đúng 10 chữ số.");
      return;
    }

    // ⛳️ Parse datetime TRƯỚC khi gọi isWorkingHour
    const selectedDate = parseLocalDateTime(datetime);
    if (!selectedDate) {
      alert("Thời gian đặt lịch không hợp lệ.");
      return;
    }

    if (selectedDate < new Date()) {
      alert("Thời gian đặt lịch phải từ hiện tại trở đi.");
      return;
    }

    if (!isWorkingHour(selectedDate)) {
      alert("Giờ hẹn phải trong 07:00–11:59 hoặc 13:00–17:59.");
      return;
    }

    try {
      const selectedService = services.find((s) => String(s.id) === String(serviceId));
      const selectedDoctor = doctors.find((d) => String(d.id) === String(doctorId));

      const servicePrice = Number(selectedService?.price) || 0;
      const deposit = servicePrice > 0 ? Math.round(servicePrice * 0.1) : 100000;

      // ❌ KHÔNG gọi BE ở đây
      // ✅ Lưu local để chuyển sang trang thanh toán
      const pendingBooking = {
        type: "appointment",
        hoten: name,
        email,
        sdt: phone,
        diachi: address,
        ghichu: note,
        thoigianhen: datetime,
        gioitinh,
        serviceId: Number(serviceId),
        doctorId: Number(doctorId),
        dichvu: selectedService?.title,
        bacsi: selectedDoctor?.name,
        giaDichVu: servicePrice,
        soTienCoc: deposit,
        dongy: agreed,
      };

      localStorage.setItem("pendingBooking", JSON.stringify(pendingBooking));
      setDepositAmount(deposit);
      setNewBooking(pendingBooking);
      setDepositOpen(true); // mở modal nhắc đặt cọc
    } catch (error) {
      console.error("❌ Lỗi khi chuẩn bị đặt lịch:", error);
      alert("Lỗi khi gửi đặt lịch, vui lòng thử lại.");
    }
  };
  /* ====================== /handleSubmit ====================== */

  const handleCloseDeposit = () => {
    setDepositOpen(false);
    alert("⚠️ Đặt lịch chưa hoàn tất vì chưa đặt cọc.");
  };
  const handleGoToPayment = () => {
    setDepositOpen(false);
    navigate("/thanhtoan"); // đường dẫn tới PaymentForm
  };

  return (
    <>
      <Navbar />
      <div className="mt-8 flex justify-center items-center min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#b2ebf2] relative overflow-hidden">
        <img
          src={logodoitac}
          alt="bg bác sĩ"
          className="absolute bottom-0 right-0 opacity-10 w-[500px] hidden md:block pointer-events-none select-none"
        />

        <div className="flex w-[950px] h-[90vh] bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all hover:scale-[1.01] relative z-10">
          <div className="w-1/2 p-6 box-border">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-fade-in">ĐẶT LỊCH HẸN</h3>
            <p className="font-semibold text-gray-700 mb-3">THÔNG TIN BỆNH NHÂN</p>

            <label className="block mt-2 font-bold text-sm text-gray-600">Họ và tên</label>
            <input
              type="text"
              placeholder="Nhập họ tên"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                readOnly
                className="w-1/2 p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                value={form.phone}
                onChange={(e) => {
                  const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setForm({ ...form, phone: onlyDigits });
                }}
                inputMode="numeric"
                pattern="\d{10}"
                maxLength={10}
                className="w-1/2 p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Cột 1: Địa chỉ */}
              <div>
                <label className="block font-bold text-sm text-gray-600">Địa chỉ</label>
                <input
                  type="text"
                  placeholder="Nhập địa chỉ"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Cột 2: Giới tính */}
              <div>
                <label className="block font-bold text-sm text-gray-600">Giới tính</label>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gioitinh"
                      value="Nam"
                      checked={form.gioitinh === "Nam"}
                      onChange={(e) => setForm({ ...form, gioitinh: e.target.value })}
                      className="text-green-600"
                    />
                    Nam
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gioitinh"
                      value="Nữ"
                      checked={form.gioitinh === "Nữ"}
                      onChange={(e) => setForm({ ...form, gioitinh: e.target.value })}
                      className="text-green-600"
                    />
                    Nữ
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gioitinh"
                      value="Khác"
                      checked={form.gioitinh === "Khác"}
                      onChange={(e) => setForm({ ...form, gioitinh: e.target.value })}
                      className="text-green-600"
                    />
                    Khác
                  </label>
                </div>
              </div>
            </div>

            <p className="font-semibold text-gray-700 mt-3 mb-2">CHỌN DỊCH VỤ</p>
            <select
              value={form.serviceId}
              onChange={(e) => setForm({ ...form, serviceId: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              disabled={loadingSvc}
            >
              <option value="" disabled>
                {loadingSvc ? "Đang tải dịch vụ..." : "Chọn dịch vụ"}
              </option>
              {services.map((svc) => (
                <option key={svc.id} value={svc.id}>
                  {svc.title}
                </option>
              ))}
            </select>
            {!!errSvc && <div className="text-red-600 text-sm mb-2">{errSvc}</div>}

            <select
              value={form.doctorId}
              onChange={(e) => setForm({ ...form, doctorId: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              disabled={loadingDoc}
            >
              <option value="" disabled>
                {loadingDoc ? "Đang tải bác sĩ..." : "Chọn bác sĩ"}
              </option>
              {/* {doctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name}
                </option>
              ))} */}
              {filteredDoctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name}
                </option>
              ))}

            </select>
            {!!errDoc && <div className="text-red-600 text-sm mb-2">{errDoc}</div>}

            <textarea
              placeholder="Thêm ghi chú"
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none h-20"
            />

            <p className="font-semibold text-gray-700 mt-3 mb-2">NGÀY VÀ GIỜ THÍCH HỢP</p>
            <input
              type="datetime-local"
              value={form.datetime}
              onChange={(e) => {
                const value = e.target.value;
                setForm({ ...form, datetime: value });

                if (!value) {
                  setTimeError("");
                  return;
                }
                const d = parseLocalDateTime(value);

                if (!isWorkingHour(d)) {
                  setTimeError("invalid");
                  alert("Vui lòng đặt trong khung 07:00–11:59 hoặc 13:00–17:59.");
                } else if (d < new Date()) {
                  setTimeError("past");
                  alert("Thời gian đặt lịch phải từ hiện tại trở đi.");
                } else {
                  setTimeError("");
                }
              }}
              /* ✅ dùng localNow cho min để tránh lệch múi giờ */
              min={localNowForDatetimeLocal()}
              step="900"
              className={`w-full p-2 mb-1 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                timeError ? "border-red-500" : "border-gray-300"
              }`}
            />
            <div className="text-xs text-gray-500 mb-2">
              Khung giờ làm việc: <b>07:00–11:00</b> & <b>13:00–17:59</b>
            </div>
            {/* KHÔNG render dòng lỗi ở đây để khỏi đẩy layout */}

            <div className="flex items-center gap-2 my-3 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={form.agreed}
                onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span>Tôi xác nhận đã đọc và đồng ý với các điều khoản</span>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              disabled={loadingSvc || loadingDoc || !!timeError}
            >
              {loadingSvc || loadingDoc ? "Đang tải..." : "ĐẶT LỊCH"}
            </button>
          </div>

          <div
            className="w-1/2 bg-cover bg-center transform transition-all duration-500 hover:scale-105"
            style={{ backgroundImage: "url('/src/assets/doctor.jpg')" }}
          />
        </div>
      </div>

      {/* MODAL ĐẶT CỌC */}
      {depositOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-[520px] max-w-[92vw] rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold mb-2">Cần đặt cọc để hoàn tất</h3>
            <p className="text-gray-700 mb-4">
              Để tránh tình trạng đặt xong không đến, vui lòng đặt cọc{" "}
              <span className="font-semibold">{currencyVN(depositAmount)}</span> để hoàn tất đặt lịch.
            </p>
            <div className="flex items-center justify-end gap-2 mt-4">
              <button
                onClick={handleCloseDeposit}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                Huỷ
              </button>
              <button
                onClick={() => {
                  setDepositOpen(false);
                  window.location.href = "/thanhtoan"; // hoặc useNavigate("/thanh-toan")
                }}
                className="px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700"
              >
                Thanh toán ngay
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
      `}</style>
    </>
  );
};

export default DatLich;
