// src/pages/LichHen.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FaCalendarAlt, FaFileExport, FaSearch } from "react-icons/fa";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Api from "../components/Api";
import dayjs from "dayjs";

const LichHen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // YYYY-MM-DD
  const [lichHenData, setLichHenData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //  Lấy dữ liệu lịch hẹn từ API khi load component
  useEffect(() => {
    Api.get("booking")
      .then((res) => {
        const data = (res.data || []).map((item) => ({
          id: item.id,
          benhNhan: item.hoten || "Chưa rõ",
          bacSi: item.bacsi || "BS. Chưa rõ",
          thoiGian: item.thoigianhen
            ? dayjs(item.thoigianhen).format("HH:mm DD/MM/YYYY")
            : "Không rõ",
          rawDate: item.thoigianhen || null, // giữ lại để lọc ngày
          dichVu: item.dichvu || "Chưa rõ",
          trangThai:
            item.trangThai ??
            (item.huy ? "Đã huỷ" : item.xacnhan ? "Đã xác nhận" : "Đang chờ xác nhận"),
          xacnhan: !!item.xacnhan,
          huy: !!item.huy,
        }));
        setLichHenData(data);
      })
      .catch((err) => {
        console.error("Lỗi lấy danh sách lịch hẹn:", err);
      });
  }, []);

  // Lọc tìm kiếm + ngày
  const filteredData = lichHenData.filter((item) => {
    const textOK =
      item.benhNhan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.bacSi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dichVu.toLowerCase().includes(searchTerm.toLowerCase());

    if (!selectedDate) return textOK;

    // So sánh theo ngày (YYYY-MM-DD)
    const itemDateStr = item.rawDate ? dayjs(item.rawDate).format("YYYY-MM-DD") : "";
    const dateOK = itemDateStr === selectedDate;
    return textOK && dateOK;
  });

  // Xuất Excel
  const handleExportReport = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      filteredData.map((item) => ({
        "Bệnh nhân": item.benhNhan,
        "Bác sĩ": item.bacSi,
        "Thời gian": item.thoiGian,
        "Dịch vụ": item.dichVu,
        "Trạng thái": item.trangThai,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "LichHen");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "lich_hen.xlsx");
  };

  // Mở modal chi tiết
  const handleViewDetail = (item) => {
    const fresh = lichHenData.find((x) => x.id === item.id) || item;
    setSelectedItem(fresh);
    setIsModalOpen(true);
  };

  // Hủy lịch (gọi BE + cập nhật FE)
  const handleCancelAppointment = async (id) => {
    if (!window.confirm("Bạn có chắc muốn hủy lịch hẹn này?")) return;
    try {
      await Api.patch(`booking/${id}`, { huy: true, trangThai: "Đã huỷ" });
      setLichHenData((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, trangThai: "Đã huỷ", huy: true, xacnhan: false }
            : item
        )
      );
      alert("✅ Đã huỷ lịch hẹn.");
      setIsModalOpen(false);
    } catch (e) {
      console.error("Hủy lịch thất bại:", e);
      alert("❌ Hủy lịch thất bại. Vui lòng thử lại.");
    }
  };

  // Xác nhận lịch (gọi BE + cập nhật FE)
  const handleConfirmAppointment = async (id) => {
    try {
      await Api.put(`booking/${id}`, { xacnhan: true, trangThai: "Đã xác nhận" });
      setLichHenData((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, trangThai: "Đã xác nhận", xacnhan: true, huy: false }
            : item
        )
      );
      alert("✅ Xác nhận lịch hẹn thành công!");
      setIsModalOpen(false);
    } catch (e) {
      console.error("Xác nhận lịch thất bại:", e);
      alert("❌ Xác nhận lịch thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-4 md:p-8 md:pl-72">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaCalendarAlt /> Quản lý lịch hẹn
          </h1>
          <button
            onClick={handleExportReport}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md"
          >
            <FaFileExport /> Xuất Excel
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            {/* Ô tìm kiếm */}
           

            {/* Bộ lọc ngày */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-auto"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              {selectedDate && (
                <button
                  onClick={() => setSelectedDate("")}
                  className="px-3 py-2 rounded-lg border hover:bg-gray-50"
                  title="Xoá lọc ngày"
                >
                  Xoá ngày
                </button>
              )}
            </div>
          </div>

          {/* Thống kê nhỏ */}
          <div
  className={`mb-3 px-4 py-2 rounded-lg inline-block ${
    selectedDate
      ? "bg-blue-100 text-blue-800 font-semibold"
      : "bg-green-100 text-green-800 font-semibold"
  }`}
>
  {selectedDate
    ? `Có ${filteredData.length} lịch hẹn trong ngày ${dayjs(selectedDate).format(
        "DD/MM/YYYY"
      )}.`
    : `Tổng ${filteredData.length} lịch hẹn.`}
</div>


          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-4 font-semibold">Bệnh nhân</th>
                  <th className="py-3 px-4 font-semibold">Bác sĩ</th>
                  <th className="py-3 px-4 font-semibold">Thời gian</th>
                  <th className="py-3 px-4 font-semibold">Dịch vụ</th>
                  <th className="py-3 px-4 font-semibold">Trạng thái</th>
                  <th className="py-3 px-4 font-semibold">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="bg-white hover:bg-gray-50 rounded-lg">
                    <td className="py-3 px-4">{item.benhNhan}</td>
                    <td className="py-3 px-4">{item.bacSi}</td>
                    <td className="py-3 px-4">{item.thoiGian}</td>
                    <td className="py-3 px-4">{item.dichVu}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          item.trangThai === "Đã xác nhận"
                            ? "bg-green-100 text-green-800"
                            : item.trangThai === "Đã huỷ"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.trangThai}
                      </span>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <button
                        onClick={() => handleViewDetail(item)}
                        className="text-blue-600 hover:text-blue-800 mr-2 text-sm"
                      >
                        Chi tiết
                      </button>
                      {item.trangThai !== "Đã huỷ" && (
                        <button
                          onClick={() => handleCancelAppointment(item.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Hủy
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredData.length === 0 && (
              <p className="text-center text-gray-500 mt-6">
                Không có lịch hẹn nào phù hợp.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Chi tiết lịch hẹn</h2>
            <p><strong>Bệnh nhân:</strong> {selectedItem.benhNhan}</p>
            <p><strong>Bác sĩ:</strong> {selectedItem.bacSi}</p>
            <p><strong>Thời gian:</strong> {selectedItem.thoiGian}</p>
            <p><strong>Dịch vụ:</strong> {selectedItem.dichVu}</p>
            <p><strong>Trạng thái:</strong> {selectedItem.trangThai}</p>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Đóng
              </button>

              {selectedItem.trangThai === "Đang chờ xác nhận" && (
                <button
                  onClick={() => handleConfirmAppointment(selectedItem.id)}
                  className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                >
                  Xác nhận
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LichHen;
