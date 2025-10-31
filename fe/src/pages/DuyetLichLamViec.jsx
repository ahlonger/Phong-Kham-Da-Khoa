// src/pages/AdminLichLamViec.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaCheck, FaTimes } from "react-icons/fa";
import Api from "../components/Api";

const toVN = (val) => {
  if (!val) return "";
  const d = new Date(val);
  if (Number.isNaN(d.getTime())) return "";
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
};

const StatusBadge = ({ value }) => {
  let cls = "bg-blue-200 text-blue-800";
  if (value === "Đang chờ xác nhận") cls = "bg-yellow-200 text-yellow-800";
  else if (value === "Đã duyệt") cls = "bg-green-200 text-green-800";
  else if (value === "Từ chối") cls = "bg-red-200 text-red-800";
  return <span className={`px-3 py-1 text-sm font-medium rounded-full ${cls}`}>{value}</span>;
};

const AdminLichLamViec = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchYear, setSearchYear] = useState("");
    const [searchMonth, setSearchMonth] = useState("");
    const [searchDay, setSearchDay] = useState("");

  // 🔹 Load tất cả lịch làm việc
  useEffect(() => {
    const loadSchedules = async () => {
      try {
        const res = await Api.get("lichlamviec");
        const data = Array.isArray(res.data) ? res.data : [];
        setSchedules(data);
      } catch (err) {
        console.error("Lỗi khi tải lịch:", err);
      }
    };
    loadSchedules();
  }, []);

  // 🔹 Duyệt lịch
  const handleApprove = async (id) => {
    if (!window.confirm("Xác nhận duyệt lịch này?")) return;
    try {
      await Api.put(`lichlamviec/${id}`, { status: "Đã duyệt" });
      setSchedules((prev) =>
        prev.map((s) =>
          s.id === id ? { ...s, status: "Đã duyệt" } : s
        )
      );
    } catch (e) {
      alert("❌ Duyệt thất bại!");
    }
  };

  // 🔹 (tuỳ chọn) Từ chối lịch
  const handleReject = async (id) => {
    if (!window.confirm("Bạn có chắc muốn từ chối lịch này?")) return;
    try {
      await Api.put(`lichlamviec/${id}`, { status: "Từ chối" });
      setSchedules((prev) =>
        prev.map((s) =>
          s.id === id ? { ...s, status: "Từ chối" } : s
        )
      );
    } catch (e) {
      alert("❌ Cập nhật thất bại!");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"} p-6`}>
        <h1 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          🧾 Quản lý lịch làm việc (Admin)
        </h1>

        <div className="bg-white p-4 rounded-lg shadow">
            {/* 🔍 Bộ lọc Năm / Tháng / Ngày */}
<div className="flex flex-wrap items-center gap-3 mb-4">
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

          <table className="w-full border-collapse text-center">
            <thead>
                <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-4 w-[160px]">Bác sĩ</th>
                <th className="py-3 px-4 w-[130px]">Ngày</th>
                <th className="py-3 px-4 w-[140px]">Ca</th>
                <th className="py-3 px-4 w-[130px]">Phòng</th>
                <th className="py-3 px-4 w-[150px]">Trạng thái</th>
                <th className="py-3 px-4 w-[150px]">Hành động</th>
                </tr>
            </thead>

            <tbody>
              {schedules
  .filter((s) => {
    if (!searchYear && !searchMonth && !searchDay) return true;
    const d = new Date(s.date);
    const year = d.getFullYear().toString();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    if (searchYear && year !== searchYear) return false;
    if (searchMonth && month !== searchMonth) return false;
    if (searchDay && day !== searchDay) return false;

    return true;
  })
  .map((s) => (

                <tr key={s.id} className="bg-white hover:bg-gray-50">
                  <td className="py-2 px-4">{s.doctorName || "Không rõ"}</td>
                  <td className="py-2 px-4">{toVN(s.date)}</td>
                  <td className="py-2 px-4">{`${s.startTime} - ${s.endTime}`}</td>
                  <td className="py-2 px-4">{s.room}</td>
                  <td className="py-2 px-4"><StatusBadge value={s.status} /></td>
                  <td className="py-2 px-4 flex gap-2">
                    {s.status === "Đang chờ xác nhận" && (
                      <>
                        <button
                          onClick={() => handleApprove(s.id)}
                          className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 flex items-center gap-1"
                        >
                          <FaCheck /> Duyệt
                        </button>
                        <button
                          onClick={() => handleReject(s.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 flex items-center gap-1"
                        >
                          <FaTimes /> Từ chối
                        </button>
                      </>
                    )}
                    {s.status === "Đã duyệt" && (
                      <span className="text-gray-400 text-sm italic">Đã duyệt</span>
                    )}
                    {s.status === "Từ chối" && (
                      <span className="text-red-400 text-sm italic">Đã từ chối</span>
                    )}
                  </td>
                </tr>
              ))}
              {schedules.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center text-gray-500 py-6">
                    Không có lịch nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminLichLamViec;
