// src/pages/QuanLyLichLamViec.jsx
import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import Api from "../components/Api";

// ===== Helpers =====
const toVN = (val) => {
  if (!val) return "";
  const d = new Date(val);
  if (Number.isNaN(d.getTime())) return "";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};


// đảm bảo giá trị cho <input type="date">
const toInputDate = (val) => {
  if (!val) return "";
  const d = new Date(val);
  if (Number.isNaN(d.getTime())) {
    // nếu BE đã trả sẵn yyyy-MM-dd thì giữ nguyên
    if (/^\d{4}-\d{2}-\d{2}$/.test(val)) return val;
    return "";
  }
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const StatusBadge = ({ value }) => {
  let cls = "bg-blue-200 text-blue-800";
  if (value === "Chưa có đăng ký") cls = "bg-green-200 text-green-800";
  else if (value === "Đang chờ xác nhận") cls = "bg-yellow-200 text-yellow-800";
  else if (value === "Đã duyệt") cls = "bg-emerald-200 text-emerald-800";
  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full ${cls}`}>
      {value}
    </span>
  );
};

const STATUS_OPTIONS = ["Chưa có đăng ký", "Đang chờ xác nhận", "Đã duyệt"];
const SHIFTS = [
  { key: "morning",  label: "Ca sáng (07:00–11:00)",  startTime: "07:00", endTime: "11:00" },
  { key: "afternoon",label: "Ca chiều (13:00–17:00)", startTime: "13:00", endTime: "17:00" },
];
const findShiftByTimes = (start, end) =>
  SHIFTS.find(s => s.startTime === start && s.endTime === end)?.key || "";

const ROOM_OPTIONS = ["Phòng 201", "Phòng 202", "Phòng 203", "Phòng 204"];

const QuanLyLichLamViec = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchDate, setSearchDate] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [searchMonth, setSearchMonth] = useState("");
  const [searchDay, setSearchDay] = useState("");
  // danh sách lịch
  const [schedules, setSchedules] = useState([]);

  // form tạo mới
  const [newSchedule, setNewSchedule] = useState({
  date: "",
  shiftKeys: [],  // chỉ lưu ca trực
  room: "",
  status: "Đang chờ xác nhận",
});


  // item đang sửa
  const [editSchedule, setEditSchedule] = useState(null);

  // ===== LOAD LIST =====
  useEffect(() => {
  (async () => {
    try {
      const doctor = JSON.parse(sessionStorage.getItem("user") || "null");
      const doctorId = doctor?.id;

      const res = doctorId
        ? await Api.get(`lichlamviec?doctorId=${doctorId}`)
        : await Api.get("lichlamviec");

      const data = Array.isArray(res.data) ? res.data : [];

      // ✅ CHỈ LẤY LỊCH CHƯA ĐƯỢC DUYỆT
      const filtered = data.filter((it) => it.status !== "Đã duyệt");

      const normalized = filtered.map((it) => ({
        ...it,
        __rawDate: it.date,
        date: toInputDate(it.date),
      }));

      setSchedules(normalized);
    } catch (e) {
      console.error("Load schedules failed:", e);
      setSchedules([]);
    }
  })();
}, []);


  // ===== VALIDATION =====
  const validate = ({ date, shiftKey, room }) => {
  if (!date || !shiftKey || !room) {
    alert("Vui lòng chọn Ngày / Ca trực / Phòng.");
    return false;
  }
  return true;
};


  // ===== CREATE =====
const handleCreate = async () => {
  
  if (!newSchedule.date && newSchedule.shiftKeys.length === 0 && !newSchedule.room) {
    alert("Vui lòng chọn Ngày / Ca trực / Phòng.");
    return;
  }

  // ⚡ Kiểm tra dữ liệu trống
  if (!newSchedule.date) {
    alert(" Vui lòng chọn ngày làm việc!");
    return;
  }

  if (newSchedule.shiftKeys.length === 0) {
    alert(" Vui lòng chọn ít nhất một ca trực!");
    return;
  }

  if (!newSchedule.room) {
    alert(" Vui lòng chọn phòng khám!");
    return;
  }
const doctor = JSON.parse(sessionStorage.getItem("user") || "null"); // ✅ thêm dòng này
  const doctorId = doctor?.id || null;
  setLoading(true);
const today = new Date();
const selected = new Date(newSchedule.date);
if (selected.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
  alert(" Không thể đăng ký ngày trong quá khứ!");
  return;
}

  try {
    // tạo nhiều payload dựa theo shiftKeys
    const createdSchedules = [];
    for (const key of newSchedule.shiftKeys) {
      const shift = SHIFTS.find((s) => s.key === key);
      const payload = {
        date: newSchedule.date,
        startTime: shift.startTime,
        endTime: shift.endTime,
        room: newSchedule.room,
        status: "Đang chờ xác nhận", 
        doctorId,
      };
      const res = await Api.post("lichlamviec", payload);
      alert("tạo lịch thành công!");
      createdSchedules.push(res.data);
    }

    // cập nhật FE
    setSchedules((prev) => [
      ...createdSchedules.map((it) => ({
        ...it,
        __rawDate: it.date,
        date: toInputDate(it.date),
      })),
      ...prev,
    ]);

    setIsCreateOpen(false);
    setNewSchedule({
      date: "",
      shiftKeys: [],
      room: "",
      status: "Đang chờ xác nhận",
    });
  } catch (e) {
    alert("Tạo lịch thất bại! Vui lòng thử lại.");
  } finally {
    setLoading(false);
  }
};


  // ===== EDIT =====
  const handleEdit = (schedule) => {
    setEditSchedule({
  ...schedule,
  date: toInputDate(schedule.__rawDate ?? schedule.date),
  shiftKey: findShiftByTimes(schedule.startTime, schedule.endTime) || "",
}); 
    setIsEditOpen(true);
  };

  const handleSaveEdit = async () => {
    if (!validate(editSchedule)) return;
const today = new Date();
const selected = new Date(editSchedule.date);
if (selected.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
  alert(" Không thể sửa lịch sang ngày trong quá khứ!");
  return;
}

    const shift = SHIFTS.find(s => s.key === editSchedule.shiftKey);
const payload = {
  date: editSchedule.date,
  startTime: shift.startTime,
  endTime: shift.endTime,
  room: editSchedule.room,
  status: editSchedule.status,
};


    setLoading(true);
    const snapshot = schedules;
    // optimistic
    setSchedules((prev) =>
      prev.map((it) =>
        it.id === editSchedule.id
          ? { ...it, ...payload, date: toInputDate(payload.date) }
          : it
      )
    );

    try {
      const res = await Api.put(`lichlamviec/${editSchedule.id}`, payload); // PUT
      const updated = res.data;
      setSchedules((prev) =>
        prev.map((it) =>
          it.id === editSchedule.id
            ? {
                ...updated,
                __rawDate: updated.date,
                date: toInputDate(updated.date),
              }
            : it
        )
      );
      setIsEditOpen(false);
      setEditSchedule(null);
    } catch (e) {
      setSchedules(snapshot);
      alert("Cập nhật lịch thất bại!");
    } finally {
      setLoading(false);
    }
  };

  // ===== DELETE =====
  const handleDelete = async (schedule) => {
    if (!window.confirm("Bạn có chắc muốn xóa lịch này?")) return;

    setLoading(true);
    const snapshot = schedules;
    setSchedules((prev) => prev.filter((it) => it.id !== schedule.id));

    try {
      await Api.delete(`lichlamviec/${schedule.id}`); // DELETE
       alert(" Xóa lịch thành công!");
    } catch (e) {
      setSchedules(snapshot);
      alert("Xóa lịch thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen mt-16 bg-gray-100">
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
          <h1 className="text-xl font-bold text-blue-700 flex items-center gap-2">
            <span>🗓️</span> Quản lý lịch làm việc
          </h1>
          {/* 🔍 Tìm kiếm theo tháng/năm */}
{/* 🔍 Bộ lọc Năm / Tháng / Ngày */}
{/* 🔍 Bộ lọc Năm / Tháng / Ngày + Nút Tất cả / Hôm nay */}
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

  {/* Nút hiển thị tất cả */}
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

  {/* Nút hiển thị lịch hôm nay */}
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



          <button
            onClick={() => setIsCreateOpen(true)}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2 disabled:opacity-60"
          >
            <FaPlus /> Tạo lịch mới
          </button>
        </div>



        <div className="bg-white p-4 rounded-lg shadow">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-4">Ngày</th>
                <th className="py-3 px-4">Giờ bắt đầu</th>
                <th className="py-3 px-4">Giờ kết thúc</th>
                <th className="py-3 px-4">Phòng khám</th>
                <th className="py-3 px-4">Trạng thái</th>
                <th className="py-3 px-4">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {schedules
  .filter((s) => {
    if (!searchYear && !searchMonth && !searchDay) return true;
    const d = new Date(s.__rawDate ?? s.date);
    const year = d.getFullYear().toString();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    if (searchYear && year !== searchYear) return false;
    if (searchMonth && month !== searchMonth) return false;
    if (searchDay && day !== searchDay) return false;

    return true;
  })
  // 🔽 SẮP XẾP THEO THỜI GIAN TĂNG DẦN (năm → tháng → ngày)
  .sort((a, b) => {
    const dateA = new Date(a.__rawDate ?? a.date);
    const dateB = new Date(b.__rawDate ?? b.date);
    return dateA - dateB; // tăng dần
  })
  .map((s) => (
    <tr key={s.id} className="bg-white hover:bg-gray-50">
      <td className="py-3 px-4">{toVN(s.__rawDate ?? s.date)}</td>
      <td className="py-3 px-4">{s.startTime}</td>
      <td className="py-3 px-4">{s.endTime}</td>
      <td className="py-3 px-4">{s.room}</td>
      <td className="py-3 px-4">
        <StatusBadge value={s.status} />
      </td>
      <td className="py-3 px-4 flex gap-2">
        {s.status === "Đang chờ xác nhận" ? (
          <>
            <button
              onClick={() => handleEdit(s)}
              className="bg-gray-500 text-white px-3 py-1 rounded text-xs hover:bg-gray-600 flex items-center gap-1"
            >
              <FaEdit /> Sửa
            </button>
            <button
              onClick={() => handleDelete(s)}
              className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 flex items-center gap-1"
            >
              <FaTrash /> Xóa
            </button>
          </>
        ) : (
          <span className="text-gray-400 italic text-sm">
            {s.status === "Đã duyệt"
              ? "Đã duyệt - không thể chỉnh"
              : "Đã từ chối - không thể chỉnh"}
          </span>
        )}
      </td>
    </tr>
  ))}

              {schedules.length === 0 && (
                <tr>
                  <td className="py-6 text-center text-gray-500" colSpan={6}>
                    Chưa có lịch nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal Tạo */}
      <Dialog open={isCreateOpen} onClose={() => setIsCreateOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg">
  <Dialog.Title className="text-lg font-bold text-blue-700 mb-4">
    Tạo lịch làm việc mới
  </Dialog.Title>

  <div className="space-y-3">
    {/* Ngày */}
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">Ngày</label>
      <input
        type="date"
        className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
        min={new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .split("T")[0]}
        value={newSchedule.date}
        onChange={(e) => setNewSchedule((v) => ({ ...v, date: e.target.value }))}
      />
    </div>

    {/* Ca trực */}
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">Ca trực</label>
      <div className="grid grid-cols-1 gap-2">
        {SHIFTS.map((s) => (
          <label
            key={s.key}
            className="flex items-center gap-2 border rounded p-2 cursor-pointer hover:bg-gray-50"
          >
            <input
              type="checkbox"
              value={s.key}
              checked={newSchedule.shiftKeys.includes(s.key)}
              onChange={(e) => {
                const { value, checked } = e.target;
                setNewSchedule((prev) =>
                  checked
                    ? { ...prev, shiftKeys: [...prev.shiftKeys, value] }
                    : { ...prev, shiftKeys: prev.shiftKeys.filter((k) => k !== value) }
                );
              }}
            />
            <span>{s.label}</span>
          </label>
        ))}
      </div>
    </div>

    {/* Phòng khám */}
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">Phòng khám</label>
      <select
        className="w-full border px-3 py-2 rounded bg-white focus:ring-2 focus:ring-blue-400 outline-none"
        value={newSchedule.room}
        onChange={(e) => setNewSchedule((v) => ({ ...v, room: e.target.value }))}
      >
        <option value="">-- Chọn phòng --</option>
        {ROOM_OPTIONS.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>

    {/* Trạng thái */}
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-600">Trạng thái</label>
      <div className="border px-3 py-2 rounded bg-gray-50 text-gray-600">
        Đang chờ xác nhận (sẽ hiển thị khi admin duyệt)
      </div>
    </div>
  </div>

  <div className="text-right mt-4">
    <button
      onClick={handleCreate}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Tạo mới
    </button>
  </div>
</Dialog.Panel>

        </div>
      </Dialog>

      {/* Modal Sửa */}
      <Dialog open={isEditOpen} onClose={() => setIsEditOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg space-y-4">
            <Dialog.Title className="text-lg font-bold text-blue-700 mb-2">
              Chỉnh sửa lịch làm việc
            </Dialog.Title>

            {editSchedule && (
              <>
                <label className="text-sm text-gray-600">Ngày</label>
                <input
  type="date"
  className="w-full border px-3 py-2 rounded"
  min={new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0]}
  value={editSchedule.date || ""}
  onChange={(e) =>
    setEditSchedule((v) => ({ ...v, date: e.target.value }))
  }
/>


                <label className="text-sm text-gray-600">Ca trực</label>
<div className="grid grid-cols-1 gap-2">
  {SHIFTS.map(s => (
    <label key={s.key} className="flex items-center gap-2 border rounded p-2 cursor-pointer">
      <input
        type="radio"
        name="edit-shift"
        value={s.key}
        checked={editSchedule?.shiftKey === s.key}
        onChange={(e) => setEditSchedule(v => ({ ...v, shiftKey: e.target.value }))}
      />
      <span>{s.label}</span>
    </label>
  ))}
</div>


                <label className="text-sm text-gray-600">Phòng khám</label>
                <select
                  className="w-full border px-3 py-2 rounded bg-white"
                  value={editSchedule.room || ""}
                  onChange={(e) =>
                    setEditSchedule((v) => ({ ...v, room: e.target.value }))
                  }
                >
                  <option value="">-- Chọn phòng --</option>
                  {ROOM_OPTIONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>

                <label className="text-sm text-gray-600">Trạng thái</label>
                <select
                  className="w-full border px-3 py-2 rounded bg-white"
                  value={editSchedule.status || "Đang chờ xác nhận"}
                  onChange={(e) =>
                    setEditSchedule((v) => ({ ...v, status: e.target.value }))
                  }
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>

                <div className="text-right">
                  <button
                    onClick={handleSaveEdit}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Lưu
                  </button>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default QuanLyLichLamViec; 