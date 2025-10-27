import React, { useEffect, useMemo, useState } from "react";
import Navbar2 from "../components/Navbar2";
import { FaSearch, FaFolderOpen } from "react-icons/fa";
import Api from "../components/Api";

const formatVND = (n) =>
  typeof n === "number"
    ? n.toLocaleString("vi-VN") + " đ"
    : n
    ? Number(n).toLocaleString("vi-VN") + " đ"
    : "0 đ";

const toVNDate = (iso) => {
  if (!iso) return "–";
  const d = new Date(iso);
  if (isNaN(d)) return "–";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

// Chuẩn hoá trạng thái hiển thị theo dữ liệu booking
const computeStatus = (item) => {
  // Ưu tiên các cờ cụ thể nếu có
  if (item.huy === true) return "Đã huỷ";
  if (item.xacnhan === true) return "Đã xác nhận";
  // Hoặc dùng chuỗi từ BE (trangThai/status)
  return item.trangThai || item.status || "Đang chờ";
};

const DichVu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // Lấy bác sĩ đang đăng nhập từ localStorage (giống các trang khác của bạn)
  const doctor = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    let ignore = false;

    const load = async () => {
      if (!doctor?.id && !doctor?.userId) {
        setErr("Không xác định được bác sĩ đang đăng nhập.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setErr("");
      try {
        const doctorId = doctor.id ?? doctor.userId;
        // Lấy tất cả booking của bác sĩ này
        const res = await Api.get(`booking?doctorId=${doctorId}`);
        const list = Array.isArray(res?.data) ? res.data : [];

        // Map về bảng hiển thị: mỗi booking = một dòng (dịch vụ bệnh nhân đã đặt)
        const mapped = list.map((b) => ({
          id: b.id,
          serviceName: b.service?.title || b.dichvu || "Không rõ dịch vụ",
          patientEmail: b.email || "–",
          date: toVNDate(b.thoigianhen),
          amount: b.service?.price ?? b.price ?? 0,
          status: computeStatus(b),
          patientName: b.hoten || b.benhNhan || b.patient?.name || "Chưa rõ", // dùng cho search
        }));

        if (!ignore) setRows(mapped);
      } catch (e) {
        console.error("Lỗi tải booking của bác sĩ:", e);
        if (!ignore) setErr("Không tải được dịch vụ bệnh nhân đã đặt.");
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    load();
    return () => { ignore = true; };
  }, [doctor]);

  // Tìm kiếm theo tên bệnh nhân / tên dịch vụ / email
  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        r.serviceName.toLowerCase().includes(q) ||
        r.patientEmail.toLowerCase().includes(q) ||
        (r.patientName || "").toLowerCase().includes(q)
    );
  }, [rows, searchTerm]);

  return (
    <div className="flex flex-col md:flex-row mt-16 min-h-screen">
      <Navbar2
        isOpen={isSidebarOpen}
        toggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        } p-4 md:p-8 bg-gray-50`}
      >
        {/* Tiêu đề & tìm kiếm */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
            <FaFolderOpen /> Dịch vụ bệnh nhân đã đặt của tôi
          </h1>

          <div className="flex items-center border rounded px-3 py-2 bg-white shadow-sm w-full md:w-auto">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Tìm kiếm theo dịch vụ / bệnh nhân / email..."
              className="outline-none flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Bảng */}
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <div className="flex items-center bg-blue-100 px-4 py-2 font-bold">
            <FaFolderOpen className="mr-2 text-blue-600" />
            Danh sách dịch vụ (đặt cho bác sĩ: {doctor?.name || doctor?.email || "?"})
          </div>

          {loading ? (
            <div className="p-6 text-gray-600">Đang tải...</div>
          ) : err ? (
            <div className="p-6 text-red-600">{err}</div>
          ) : (
            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="px-4 py-3 font-medium">Tên dịch vụ</th>
                  <th className="px-4 py-3 font-medium">Bệnh nhân (email)</th>
                  <th className="px-4 py-3 font-medium">Ngày</th>
                  <th className="px-4 py-3 font-medium">Thành tiền</th>
                  <th className="px-4 py-3 font-medium">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr key={r.id} className="border-t hover:bg-gray-50 transition">
                    <td className="px-4 py-3">{r.serviceName}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col">
                        <span className="font-medium">{r.patientName}</span>
                        <span className="text-sm text-gray-500">{r.patientEmail}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">{r.date}</td>
                    <td className="px-4 py-3">{formatVND(r.amount)}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 text-sm rounded-full font-medium
                          ${r.status === "Đã huỷ"
                            ? "bg-red-200 text-red-800"
                            : r.status === "Đã xác nhận"
                            ? "bg-green-200 text-green-800"
                            : "bg-yellow-200 text-yellow-800"}`}
                      >
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center px-4 py-6 text-gray-500">
                      Không có dịch vụ nào được đặt cho bác sĩ này.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default DichVu;
