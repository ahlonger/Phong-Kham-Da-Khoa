// src/pages/LichHenCuaToi.jsx
import React, { useEffect, useState } from "react";
import Api from "../components/Api";

const XemLichHen = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ✅ Lấy user từ sessionStorage thay vì localStorage
    const storedUser = JSON.parse(sessionStorage.getItem("user") || "null");
    if (!storedUser) return;
    setUser(storedUser);

    // ✅ Gọi API lấy lịch hẹn và lọc theo người đang đăng nhập
    (async () => {
      try {
        const res = await Api.get("booking");
        let list = Array.isArray(res.data) ? res.data : [];

        // ✅ Chỉ giữ lịch của user hiện tại (theo email hoặc id)
        list = list.filter(
          (b) =>
            b.email === storedUser.email ||
            b.userId === storedUser.id ||
            b.user_id === storedUser.id
        );

        // ✅ Sắp xếp giảm dần theo thời gian
        list.sort((a, b) => new Date(b.thoigianhen) - new Date(a.thoigianhen));

        setBookings(list);
      } catch (e) {
        console.error("❌ Lỗi tải lịch hẹn:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-blue-600 mb-6 text-center">
        Lịch hẹn của tôi
      </h3>

      {loading ? (
        <p className="text-center text-gray-600">Đang tải...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">Chưa có lịch hẹn nào.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="p-5 rounded-xl border bg-gradient-to-br from-blue-50 to-white shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    b.huy
                      ? "bg-red-100 text-red-600"
                      : b.xacnhan
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {b.huy
                    ? "Đã hủy"
                    : b.xacnhan
                    ? "Đã xác nhận"
                    : "Đang chờ"}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(b.thoigianhen).toLocaleDateString("vi-VN")}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {b.dichvu}
              </h4>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Bác sĩ:</strong> {b.bacsi || "—"}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Thời gian:</strong>{" "}
                {new Date(b.thoigianhen).toLocaleTimeString("vi-VN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Ghi chú:</strong> {b.ghichu || "Không có"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default XemLichHen;
