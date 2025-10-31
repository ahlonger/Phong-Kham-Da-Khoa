// src/pages/LichHenHomNay.jsx
import React, { useEffect, useMemo, useState } from "react";
import Navbar2 from "../components/Navbar2";
import Api from "../components/Api";

// ===== Helpers =====
const normalize = (v) => (v ?? "").toString().trim().toLowerCase();

const toSlugVN = (str) => {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
};

const sameLocalDate = (a, b) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const toTimeHHMM = (d) => {
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const toDateInputValue = (d) => {
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
const fromDateInputValue = (s) => (s ? new Date(`${s}T00:00:00`) : null);

const minutesOf = (d) => d.getHours() * 60 + d.getMinutes();
const parseHHMM = (s) => {
  if (!s) return null;
  const [h, m] = s.split(":").map((x) => parseInt(x, 10));
  if (Number.isNaN(h) || Number.isNaN(m)) return null;
  return h * 60 + m;
};

const LichHenHomNay = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [dateStr, setDateStr] = useState(() => toDateInputValue(new Date()));
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
const [searchYear, setSearchYear] = useState("");
const [searchMonth, setSearchMonth] = useState("");
const [searchDay, setSearchDay] = useState("");

  // ✅ Lấy thông tin bác sĩ đang đăng nhập từ sessionStorage (thay vì localStorage)
  const doctor = useMemo(() => {
    try {
      const b = JSON.parse(sessionStorage.getItem("bacsi"));
      const u = JSON.parse(sessionStorage.getItem("user"));
      const a = JSON.parse(sessionStorage.getItem("admin"));
      return b || u || a || null;
    } catch {
      return null;
    }
  }, []);

  const doctorDisplayName =
    doctor?.name || doctor?.fullName || doctor?.email || "Bác sĩ";

  const doctorKeys = useMemo(() => {
    const name = doctor?.name || doctor?.fullName || "";
    const email = doctor?.email || "";
    const rawSlug = doctor?.slug || doctor?.username || doctor?.userName || "";
    const derivedSlug = name ? toSlugVN(name) : "";
    const prefixSlug = derivedSlug ? `bs-${derivedSlug}` : "";
    const variants = [
      rawSlug,
      derivedSlug,
      prefixSlug,
      name,
      email,
      name ? `bs. ${name}` : "",
      name ? `bs ${name}` : "",
      name ? `bác sĩ ${name}` : "",
    ]
      .map((x) => x && x.toString().trim().toLowerCase())
      .filter(Boolean);
    return Array.from(new Set(variants));
  }, [doctor]);

  useEffect(() => {
    let ignore = false;

    const fetchForDoctorWithFilter = async () => {
      try {
        setLoading(true);
        setErr("");

        const res = await Api.get("booking");
        const list = Array.isArray(res.data) ? res.data : [];

        const selectedDate = fromDateInputValue(dateStr);
        const minMin = parseHHMM(timeFrom);
        const maxMin = parseHHMM(timeTo);

        const isMine = (item) => {
          const fields = [
            item.bacsiSlug,
            item.bacsi,
            item.doctor,
            item.doctorSlug,
            item.bacsiEmail,
            item.doctorEmail,
            item.bacsiUsername,
            item.doctorUsername,
          ]
            .map((x) => (x ?? "").toString().trim().toLowerCase())
            .filter(Boolean);

          const anyHit = fields.some((f) =>
            doctorKeys.some((k) => f === k || f.includes(k) || k.includes(f))
          );
          if (anyHit) return true;

          const dId = doctor?.id ?? doctor?.userId ?? doctor?.doctorId;
          const bId =
            item.bacsiId ?? item.doctorId ?? item.bacsi_id ?? item.doctor_id;
          if (dId != null && bId != null && Number(dId) === Number(bId))
            return true;

          return false;
        };

        const filtered = list
  .filter((item) => {
    const start = new Date(
      item.thoigianhen || item.datetime || item.startTime
    );
    if (isNaN(start)) return false;

    const year = start.getFullYear().toString();
    const month = String(start.getMonth() + 1).padStart(2, "0");
    const day = String(start.getDate()).padStart(2, "0");

    // ✅ lọc theo năm / tháng / ngày đã chọn
    if (searchYear && year !== searchYear) return false;
    if (searchMonth && month !== searchMonth) return false;
    if (searchDay && day !== searchDay) return false;

    const mins = minutesOf(start);
    if (minMin != null && mins < minMin) return false;
    if (maxMin != null && mins > maxMin) return false;

    return isMine(item);
  })

          .map((item) => {
            const start = new Date(
              item.thoigianhen || item.datetime || item.startTime
            );
            const tenBenhNhan =
              item.hoten ||
              item.benhNhan ||
              item.patient?.name ||
              item.user?.name ||
              "Chưa rõ";

            const email =
              item.email || item.patient?.email || item.user?.email || "";
            const sdt =
              item.sdt ||
              item.phone ||
              item.patient?.phone ||
              item.user?.phone ||
              "";
            const genderRaw =
              item.gioitinh ||
              item.gender ||
              item.patient?.gender ||
              item.user?.gender ||
              "";
            const g = genderRaw.toString().trim().toLowerCase();
            const gioiTinh = g
              ? ["nam", "male", "m"].includes(g)
                ? "Nam"
                : ["nữ", "nu", "female", "f"].includes(g)
                ? "Nữ"
                : genderRaw
              : "Không rõ";

            const trangThai =
              item.trangThai ||
              item.status ||
              (item.xacnhan === true
                ? "Đã xác nhận"
                : "Đang chờ xác nhận");

            return {
              id: item.id,
              benhNhan: tenBenhNhan,
              email,
              sdt,
              gioiTinh,
              gio: toTimeHHMM(start),
              ngay: start.toLocaleDateString("vi-VN"),
              trangThai,
            };
          })
          .sort((a, b) => (a.gio > b.gio ? 1 : -1));

        if (!ignore) setRows(filtered);
      } catch (e) {
        console.error(e);
        if (!ignore) setErr("Không tải được lịch hẹn.");
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchForDoctorWithFilter();
    return () => {
      ignore = true;
    };
  }, [doctor, doctorKeys, searchYear, searchMonth, searchDay, timeFrom, timeTo]);

  const totalBenhNhan = rows.length;
  const bumpDays = (n) => {
    const d = fromDateInputValue(dateStr) || new Date();
    const nd = new Date(d);
    nd.setDate(d.getDate() + n);
    setDateStr(toDateInputValue(nd));
  };

  return (
    <div className="flex mt-16 min-h-screen bg-gray-100">
      <Navbar2
        isOpen={isSidebarOpen}
        toggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } p-6`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-500 font-bold">📆</span>
            </div>
            <h1 className="text-xl font-bold text-blue-600">
              Lịch hẹn theo ngày/giờ
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Phòng khám đa khoa</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500">👤</span>
            </div>
            <span className="text-sm text-gray-600">{doctorDisplayName}</span>
          </div>
        </div>


        {/* Bộ lọc Năm / Tháng / Ngày giống trang Quản lý lịch làm việc */}
{/* Bộ lọc đơn giản giống ảnh bên phải */}
<div className="bg-white p-4 rounded-lg shadow mb-4">
  <div className="flex flex-wrap items-center gap-3 mb-2">
    <label className="text-gray-700 text-sm font-medium">Năm:</label>
    <select
      value={searchYear}
      onChange={(e) => setSearchYear(e.target.value)}
      className="border border-gray-300 rounded px-2 py-1 text-sm"
    >
      <option value="">--</option>
      {Array.from({ length: 6 }, (_, i) => 2025 - i).map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>

    <label className="text-gray-700 text-sm font-medium">Tháng:</label>
    <select
      value={searchMonth}
      onChange={(e) => setSearchMonth(e.target.value)}
      className="border border-gray-300 rounded px-2 py-1 text-sm"
    >
      <option value="">--</option>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
        <option key={month} value={String(month).padStart(2, "0")}>
          {month}
        </option>
      ))}
    </select>

    <label className="text-gray-700 text-sm font-medium">Ngày:</label>
    <select
      value={searchDay}
      onChange={(e) => setSearchDay(e.target.value)}
      className="border border-gray-300 rounded px-2 py-1 text-sm"
    >
      <option value="">--</option>
      {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
        <option key={day} value={String(day).padStart(2, "0")}>
          {day}
        </option>
      ))}
    </select>

    {/* Nút Tất cả */}
    <button
      onClick={() => {
        setSearchYear("");
        setSearchMonth("");
        setSearchDay("");
      }}
      className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm px-3 py-1 rounded"
    >
      Tất cả
    </button>

    {/* Nút Hôm nay */}
    <button
      onClick={() => {
        const now = new Date();
        setSearchYear(now.getFullYear().toString());
        setSearchMonth(String(now.getMonth() + 1).padStart(2, "0"));
        setSearchDay(String(now.getDate()).padStart(2, "0"));
      }}
      className="bg-green-200 hover:bg-green-300 text-green-800 text-sm px-3 py-1 rounded"
    >
      Hôm nay
    </button>
  </div>
</div>



        {/* Bảng dữ liệu */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">
            Danh sách lịch hẹn{" "}
            <span className="ml-2 text-sm text-gray-600">
              (Ngày: {fromDateInputValue(dateStr)?.toLocaleDateString("vi-VN")})
            </span>
            <span className="ml-2 text-sm font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
              Số lượng: {totalBenhNhan}
            </span>
          </h2>

          {loading && <div className="text-gray-600">Đang tải...</div>}
          {!!err && <div className="text-red-600">{err}</div>}

          {!loading && !err && (
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[980px]">
                <thead>
                  <tr className="bg-gray-300 text-gray-700">
                    <th className="py-3 px-4 font-semibold">Tên bệnh nhân</th>
                    <th className="py-3 px-4 font-semibold">Email</th>
                    <th className="py-3 px-4 font-semibold">SĐT</th>
                    <th className="py-3 px-4 font-semibold">Giới tính</th>
                    <th className="py-3 px-4 font-semibold">Giờ</th>
                    <th className="py-3 px-4 font-semibold">Ngày</th>
                    <th className="py-3 px-4 font-semibold">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r.id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-4">{r.benhNhan}</td>
                      <td className="py-3 px-4">{r.email || "—"}</td>
                      <td className="py-3 px-4">{r.sdt || "—"}</td>
                      <td className="py-3 px-4">{r.gioiTinh}</td>
                      <td className="py-3 px-4">{r.gio}</td>
                      <td className="py-3 px-4">{r.ngay}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 text-sm font-medium rounded-full ${
                            normalize(r.trangThai) ===
                            normalize("Đang chờ xác nhận")
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-blue-200 text-blue-800"
                          }`}
                        >
                          {r.trangThai}
                        </span>
                      </td>
                    </tr>
                  ))}

                  {rows.length === 0 && (
                    <tr>
                      <td
                        colSpan={7}
                        className="text-center px-4 py-6 text-gray-500"
                      >
                        Không có lịch hẹn cho ngày{" "}
                        {fromDateInputValue(dateStr)?.toLocaleDateString(
                          "vi-VN"
                        )}
                        {timeFrom || timeTo ? (
                          <>
                            {" "}
                            trong khoảng giờ{" "}
                            <strong>
                              {timeFrom || "00:00"} – {timeTo || "23:59"}
                            </strong>
                          </>
                        ) : null}
                        .
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LichHenHomNay;
