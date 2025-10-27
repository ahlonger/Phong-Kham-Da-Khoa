import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaCheck, FaDownload, FaStar } from "react-icons/fa";

const initialData = [
  {
    id: 1,
    tenKhach: "Nguyễn Văn A",
    email: "nva@gmail.com",
    soSao: 5,
    binhLuan: "Dịch vụ rất tốt, bác sĩ tư vấn tận tâm. Tôi rất hài lòng!",
    ngay: "25/06/2025",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    daDuyet: false,
  },
  {
    id: 2,
    tenKhach: "Trần Thị B",
    email: "tran.b@gmail.com",
    soSao: 3,
    binhLuan: "Thời gian chờ hơi lâu, mong được cải thiện.",
    ngay: "24/06/2025",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    daDuyet: false,
  },
  {
    id: 3,
    tenKhach: "Lê Minh C",
    email: "le.c@gmail.com",
    soSao: 4,
    binhLuan: "Không gian sạch sẽ, lễ tân thân thiện. Sẽ quay lại!",
    ngay: "22/06/2025",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    daDuyet: false,
  },
];

const DanhGia = () => {
  const [danhGiaData, setDanhGiaData] = useState(initialData);

  const handleDuyet = (id) => {
    setDanhGiaData((prev) =>
      prev.map((dg) =>
        dg.id === id ? { ...dg, daDuyet: true } : dg
      )
    );
    alert(`Đã duyệt đánh giá ID: ${id}`);
  };

  const handleXuat = (id) => {
    const dg = danhGiaData.find((d) => d.id === id);
    if (dg) {
      const content = `
Tên khách: ${dg.tenKhach}
Email: ${dg.email}
Ngày gửi: ${dg.ngay}
Số sao: ${dg.soSao}
Bình luận: ${dg.binhLuan}
Trạng thái: ${dg.daDuyet ? "Đã duyệt" : "Chưa duyệt"}
`;
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `danhgia-${id}.txt`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-4 md:p-8 md:pl-72">
        <h1 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
          <span className="mr-2">👥</span> Danh sách đánh giá
        </h1>

        <div className="space-y-6">
          {danhGiaData.map((dg) => (
            <div
              key={dg.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center bg-blue-50 rounded-2xl p-4 md:p-6 border border-blue-100"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
                <img
                  src={dg.avatar}
                  alt={dg.tenKhach}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-300"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-blue-900">
                    {dg.tenKhach}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Email: {dg.email} • Ngày gửi: {dg.ngay}
                  </p>
                  <p className="mt-2 text-gray-800">{dg.binhLuan}</p>
                  <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0 mt-4">
                    {!dg.daDuyet && (
                      <button
                        onClick={() => handleDuyet(dg.id)}
                        className="flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm"
                      >
                        <FaCheck className="mr-1" /> Duyệt
                      </button>
                    )}
                    <button
                      onClick={() => handleXuat(dg.id)}
                      className="flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm"
                    >
                      <FaDownload className="mr-1" /> Xuất
                    </button>
                  </div>
                  {dg.daDuyet && (
                    <p className="mt-2 text-green-700 font-semibold">✔ Đã duyệt</p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-1 mt-4 md:mt-0">
                {Array.from({ length: dg.soSao }).map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DanhGia;
//         Không có dịch vụ nào phù hợp với tìm kiếm của bạn.