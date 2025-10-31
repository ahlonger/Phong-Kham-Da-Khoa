// src/pages/PaymentForm.jsx
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../components/Api";

const PaymentForm = () => {
  const [bookingData, setBookingData] = useState(null);
  const [form, setForm] = useState({
    method: "",
    invoiceCode: `INV-${Date.now()}`, // vẫn hiển thị cho người dùng, KHÔNG gửi BE
  });
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  // Lấy token giống DatLich (để gọi BE có Authorization)
  const token = (() => {
    try {
      const t = JSON.parse(sessionStorage.getItem("token") || "null");
      return t || sessionStorage.getItem("token") || undefined;
    } catch {
      return sessionStorage.getItem("token") || undefined;
    }
  })();
  const authCfg = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

  useEffect(() => {
    const pendingBooking = sessionStorage.getItem("pendingBooking");
    if (!pendingBooking) {
      alert("Không có dữ liệu thanh toán. Vui lòng thực hiện lại.");
      navigate("/dat-lich");
      return;
    }
    try {
      setBookingData(JSON.parse(pendingBooking));
    } catch {
      alert("Dữ liệu thanh toán không hợp lệ. Vui lòng thực hiện lại.");
      navigate("/dat-lich");
    }
  }, [navigate]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Mặc định tiền cọc hiển thị (chỉ UI) – KHÔNG gửi BE
  const defaultDeposit = useMemo(() => {
    if (!bookingData) return 100000;
    const suggest = Number(bookingData?.soTienCoc || 0);
    if (suggest > 0) return Math.round(suggest);
    const gia = Number(bookingData?.giaDichVu || 0);
    return gia > 0 ? Math.round(gia * 0.1) : 100000;
  }, [bookingData]);

  // Chuẩn hóa type
  const rawType = String(bookingData?.type || "appointment").toLowerCase().trim();
  const isPackage = ["package", "goiuser", "goi", "pack"].includes(rawType);
  const isAppointment = rawType === "appointment";

  // Số tiền hiển thị cho UI
  const payableAmount = useMemo(() => {
    const gia = Number(bookingData?.giaDichVu || 0);
    return isPackage ? gia : defaultDeposit;
  }, [bookingData, isPackage, defaultDeposit]);

  const payableLabel = isPackage ? "Tiền cần thanh toán" : "Tiền cọc cần thanh toán";

  // chỉ giữ key có giá trị
  const prune = (obj) =>
    Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined && v !== null && v !== ""));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.method) {
      alert("Vui lòng chọn phương thức thanh toán!");
      return;
    }

    setProcessing(true);
    try {
      // NHÁNH GÓI DỊCH VỤ: không gọi BE (giữ nguyên hành vi cũ)
      if (isPackage) {
        sessionStorage.removeItem("pendingBooking");
        alert("✅ Thanh toán thành công cho gói dịch vụ!");
        navigate("/", {
          state: {
            message: "Mua gói thành công!",
            from: "payment",
            invoiceCode: form.invoiceCode,
            amount: payableAmount,
          },
        });
        return;
      }

      // NHÁNH ĐẶT LỊCH: CHỈ GỬI TRƯỜNG CỦA SCHEMA BOOKING (KHÔNG GỬI BẤT KỲ TRƯỜNG THANH TOÁN NÀO)
      const base = {
        hoten: bookingData?.hoten,
        email: bookingData?.email,
        sdt: bookingData?.sdt,
        diachi: bookingData?.diachi,

        dichvu: bookingData?.dichvu,
        bacsi: bookingData?.bacsi,

        gioitinh: bookingData?.gioitinh,
        ghichu: bookingData?.ghichu,
        thoigianhen: bookingData?.thoigianhen,
        dongy: bookingData?.dongy ?? true,

        // quan hệ
        serviceId: bookingData?.serviceId != null ? Number(bookingData.serviceId) : undefined,
        doctorId: bookingData?.doctorId != null ? Number(bookingData.doctorId) : undefined,

        // có/không cũng được vì schema cho phép null
        trangThai: "Đang chờ xác nhận",
        // ❌ Không gửi: phuongThucThanhToan, maHoaDon, soTienCoc, ngayThanhToan
      };

      const payload = prune(base);

      let response;
      try {
        response = await Api.post("booking", payload, authCfg);
      } catch (err) {
        console.error("❌ Lỗi network/axios khi gọi booking:", err);
        alert(err?.response?.data?.message || "❌ Không gọi được máy chủ. Vui lòng thử lại.");
        setProcessing(false);
        return;
      }

      // Nhận dạng thành công theo format { message, booking }
      const okStatus = [200, 201].includes(response?.status);
      const respData = response?.data ?? {};
      const bookingObj =
        respData.booking ||
        respData.data?.booking ||
        respData.result ||
        respData.data;

      const createdId =
        respData.id ||
        respData.bookingId ||
        respData.data?.id ||
        respData.data?.bookingId ||
        bookingObj?.id ||
        bookingObj?._id ||
        bookingObj?.bookingId;

      if (okStatus && (createdId || bookingObj)) {
        sessionStorage.removeItem("pendingBooking");
        alert(" Đặt lịch thành công!");
        navigate("/", {
          state: {
            message: "Đặt lịch thành công!",
            bookingId: createdId || null,
          },
        });
      } else {
        console.error("⚠️ Phản hồi không đạt điều kiện thành công:", response);
        alert(
          respData?.message ||
            "⚠️ Máy chủ phản hồi nhưng không xác nhận lưu được lịch. Vui lòng thử lại hoặc liên hệ hỗ trợ."
        );
      }
    } catch (error) {
      console.error(" Lỗi khi xử lý thanh toán:", error);
      alert(error?.response?.data?.message || " Có lỗi xảy ra khi thanh toán. Vui lòng thử lại.");
    } finally {
      setProcessing(false);
    }
  };

  const handleBack = () => {
    if (isPackage) navigate("/goi-dich-vu");
    else navigate("/dat-lich");
  };

  if (!bookingData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Đang tải thông tin thanh toán...</p>
        </div>
      </div>
    );
  }

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount || 0);
  const formatDateTime = (s) =>
    s
      ? new Date(s).toLocaleString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : "";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="bg-green-600 text-white p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold text-center">
            {isPackage ? "THANH TOÁN GÓI DỊCH VỤ" : "HOÀN TẤT ĐẶT LỊCH"}
          </h2>
          <p className="text-center opacity-90">
            {isPackage ? "Hoàn tất quá trình mua gói" : "Xác nhận thông tin đặt lịch"}
          </p>
        </div>

        <div className="p-6">
          {/* Thông tin */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-lg mb-3 text-blue-800">
              {isPackage ? "Thông tin gói" : "Thông tin đặt lịch"}
            </h3>
            <div className="space-y-2 text-sm">
              {bookingData?.hoten && (
                <div className="flex justify-between">
                  <span className="font-medium">Khách hàng:</span>
                  <span>{bookingData.hoten}</span>
                </div>
              )}
              {bookingData?.dichvu && (
                <div className="flex justify-between">
                  <span className="font-medium">Dịch vụ:</span>
                  <span>{bookingData.dichvu}</span>
                </div>
              )}
              {isAppointment && bookingData?.bacsi && (
                <div className="flex justify-between">
                  <span className="font-medium">Bác sĩ:</span>
                  <span>{bookingData.bacsi}</span>
                </div>
              )}
              {isAppointment && bookingData?.thoigianhen && (
                <div className="flex justify-between">
                  <span className="font-medium">Thời gian:</span>
                  <span>{formatDateTime(bookingData.thoigianhen)}</span>
                </div>
              )}
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-medium">Tổng tiền dịch vụ:</span>
                <span>{formatCurrency(bookingData?.giaDichVu)}</span>
              </div>
              {!isPackage && (
                <div className="flex justify-between font-bold text-green-600">
                  <span>{payableLabel}:</span>
                  <span>{formatCurrency(payableAmount)}</span>
                </div>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Các trường phía dưới phục vụ UI, không gửi BE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mã hóa đơn (tham khảo)</label>
              <input
                type="text"
                name="invoiceCode"
                value={form.invoiceCode}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phương thức *</label>
              <select
                name="method"
                value={form.method}
                onChange={handleChange}
                required
                disabled={processing}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
              >
                <option value="">Chọn phương thức</option>
                <option value="cash">Tiền mặt</option>
                <option value="bank">Chuyển khoản</option>
              </select>
            </div>

            {form.method === "bank" && (
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-sm">
                <p className="font-semibold mb-2 text-yellow-800">Thông tin chuyển khoản (tham khảo):</p>
                <div className="space-y-1">
                  <p><span className="font-medium">Ngân hàng:</span> Vietcombank</p>
                  <p><span className="font-medium">Số tài khoản:</span> 0123456789</p>
                  <p><span className="font-medium">Chủ tài khoản:</span> PHONG KHAM DA KHOA</p>
                  <p><span className="font-medium">Ghi chú:</span> Không lưu vào DB</p>
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={handleBack}
                disabled={processing}
                className="flex-1 py-3 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Quay lại
              </button>
              <button
                type="submit"
                disabled={processing}
                className="flex-1 py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {processing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Đang xử lý...
                  </>
                ) : (
                  "Xác nhận"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
