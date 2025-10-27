// src/pages/CaiDat.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import { FaCogs } from "react-icons/fa";

const CaiDat = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6 pl-72">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
          <FaCogs /> Cài đặt hệ thống
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <p className="text-gray-700">
            Đây là trang cài đặt, nơi bạn có thể cấu hình các tuỳ chọn hệ thống như:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Cập nhật thông tin phòng khám</li>
            <li>Quản lý thông báo hệ thống</li>
            <li>Cài đặt thời gian làm việc</li>
            <li>Thay đổi logo, favicon</li>
            <li>Cấu hình email thông báo</li>
          </ul>

          {/* Vùng có thể thêm form hoặc các card cài đặt */}
          <div className="mt-6">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded">
              <p className="text-blue-700 font-medium">
                👉 Bạn có thể bổ sung thêm các biểu mẫu cấu hình tại đây...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaiDat;
