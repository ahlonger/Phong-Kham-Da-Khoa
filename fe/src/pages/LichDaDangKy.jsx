// src/pages/LichDaDangKy.jsx
import React, { useEffect, useMemo, useState } from "react";
import Navbar2 from "../components/Navbar2";
import Api from "../components/Api";

// format dd/MM/yyyy
const toVN = (val) => {
  if (!val) return "";
  const d = new Date(val);
  if (Number.isNaN(d.getTime())) return "";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

const StatusBadge = ({ value }) => {
  let cls = "bg-blue-200 text-blue-800";
  if (value === "Chưa có đăng ký") cls = "bg-green-200 text-green-800";
  else if (value === "Đang chờ xác nhận") cls = "bg-yellow-200 text-yellow-800";
  else if (value === "Đã duyệt" || value === "Đã xác nhận")
    cls = "bg-emerald-200 text-emerald-800";
  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full ${cls}`}>
      {value}
    </span>
  );
};

const LichDaDangKy = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);

  // === LẤY BÁC SĨ ĐANG ĐĂNG NHẬP (y như LichHenHomNay) ===
  const doctor = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  }, []);

  const doctorDisplayName =
    doctor?.name || doctor?.fullName || doctor?.email || "Bác sĩ";

  const displayRole = (() => {
    const r = (doctor?.role || "").toLowerCase();
    if (r === "doctor" || r === "bác sĩ" || r === "bacsi") return "Bác sĩ";
    if (r === "admin") return "Admin";
    return "Người dùng";
  })();

  const avatarUrl = doctor?.avatar
    ? doctor.avatar.startsWith("http")
      ? doctor.avatar
      : `${import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"}/uploads/user/${doctor.avatar}`
    : null;

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        // nếu muốn lọc theo doctorId ngay từ BE: dùng ?doctorId=
        // const res = await Api.get(`lichlamviec?doctorId=${doctor?.id || ""}`);
        const res = await Api.get("lichlamviec");
        const data = Array.isArray(res.data) ? res.data : [];
        const mapped = data
          .filter((it) =>
            (doctor?.role?.toLowerCase() === "doctor" && doctor?.id)
              ? it.doctorId === doctor.id
              : true
          )
          .map((it) => ({
            id: it.id,
            ngay: toVN(it.date),
            gioBatDau: it.startTime,
            gioKetThuc: it.endTime,
            phongKham: it.room,
            trangThai: it.status || "Đang chờ xác nhận",
          }));
        setSchedules(mapped);
      } catch (e) {
        console.error("Load lichlamviec failed:", e);
        setSchedules([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [doctor]);

  return (
    <div className="flex min-h-screen bg-gray-100 mt-16">
      <Navbar2
        isOpen={isSidebarOpen}
        toggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } p-6`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
              <span className="text-gray-500 font-bold">📅</span>
            </div>
            <h1 className="text-xl font-bold text-blue-600">Lịch đã đăng ký</h1>
          </div>

          {/* HIỂN THỊ BÁC SĨ ĐANG ĐĂNG NHẬP - giống LichHenHomNay */}
       {/* HIỂN THỊ BÁC SĨ ĐANG ĐĂNG NHẬP */}
<div className="flex items-center space-x-2">
  <span className="text-sm text-gray-600">Phòng khám đa khoa</span>
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    <span className="text-gray-500">👤</span>
  </div>
  <span className="text-sm text-gray-600">{doctorDisplayName}</span>
</div>

        </div>

        {/* Nội dung chính */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Danh sách lịch đã đăng ký</h2>
            {loading && (
              <span className="text-sm text-gray-500 animate-pulse">
                Đang tải...
              </span>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="bg-gray-300 text-gray-700">
                  <th className="py-3 px-4 font-semibold">Ngày</th>
                  <th className="py-3 px-4 font-semibold">Giờ bắt đầu</th>
                  <th className="py-3 px-4 font-semibold">Giờ kết thúc</th>
                  <th className="py-3 px-4 font-semibold">Phòng khám</th>
                  <th className="py-3 px-4 font-semibold">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule) => (
                  <tr key={schedule.id} className="border-t hover:bg-gray-50 transition">
                    <td className="py-3 px-4">{schedule.ngay}</td>
                    <td className="py-3 px-4">{schedule.gioBatDau}</td>
                    <td className="py-3 px-4">{schedule.gioKetThuc}</td>
                    <td className="py-3 px-4">{schedule.phongKham}</td>
                    <td className="py-3 px-4">
                      <StatusBadge value={schedule.trangThai} />
                    </td>
                  </tr>
                ))}
                {!loading && schedules.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center px-4 py-6 text-gray-500">
                      Không có lịch nào được đăng ký.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LichDaDangKy;
