// src/pages/TrangChu.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import {
  FaCalendarAlt,
  FaUsers,
  FaBoxOpen,
  FaComments,
  FaPlus,
  FaCheck,
} from "react-icons/fa";

const TrangChu = () => {
  const today = new Date().toLocaleDateString("vi-VN");

  const hoatDongGanDay = [
    {
      id: 1,
      icon: <FaCalendarAlt className="text-blue-500" />,
      content: "Lịch hẹn của Nguyễn Văn A được xác nhận.",
      time: "26/06/2025 - 09:00",
    },
    {
      id: 2,
      icon: <FaComments className="text-blue-500" />,
      content: "Đánh giá mới từ Trần Thị B.",
      time: "25/06/2025 - 15:20",
    },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar cố định bên trái */}
    <Sidebar />
      {/* Nội dung trang chủ */}
      <div className="flex-1 p-8 pl-72">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <FaCalendarAlt className="mr-2 text-blue-600" /> Bảng điều khiển
          </h1>
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Admin"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Admin</p>
              <p className="text-sm text-gray-500">Phòng khám Đa khoa</p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">Chào mừng, Admin!</h2>
        <p className="text-gray-600 mb-6">
          Tổng quan hoạt động phòng khám hôm nay, {today}.
        </p>

        {/* Thống kê tổng quan */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl flex items-center space-x-4">
            <FaCalendarAlt className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-600">Lịch hẹn</p>
              <p className="text-xl font-bold">12</p>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl flex items-center space-x-4">
            <FaUsers className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-600">Tài khoản</p>
              <p className="text-xl font-bold">25</p>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl flex items-center space-x-4">
            <FaBoxOpen className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-600">Dịch vụ gói</p>
              <p className="text-xl font-bold">8</p>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl flex items-center space-x-4">
            <FaComments className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-600">Đánh giá</p>
              <p className="text-xl font-bold">15</p>
            </div>
          </div>
        </div>

        {/* Truy cập nhanh */}
        <h3 className="text-lg font-semibold mb-2 text-blue-700">
          Truy cập nhanh
        </h3>
        <div className="space-x-4 mb-8">
          <a
            href="/lich-hen"
            className="text-blue-600 underline inline-flex items-center"
          >
            <FaCalendarAlt className="mr-1" /> Xem lịch hẹn
          </a>
          <a
            href="/dich-vu-goi"
            className="text-blue-600 underline inline-flex items-center"
          >
            <FaPlus className="mr-1" /> Thêm dịch vụ gói
          </a>
          <a
            href="/tai-khoan"
            className="text-blue-600 underline inline-flex items-center"
          >
            <FaUsers className="mr-1" /> Tạo tài khoản
          </a>
          <a
            href="/danh-gia"
            className="text-blue-600 underline inline-flex items-center"
          >
            <FaCheck className="mr-1" /> Duyệt đánh giá
          </a>
        </div>

        {/* Hoạt động gần đây */}
        <h3 className="text-lg font-semibold mb-4 text-blue-700">
          Hoạt động gần đây
        </h3>
        <div className="space-y-4">
          {hoatDongGanDay.map((item) => (
            <div key={item.id} className="flex items-start space-x-3">
              <div>{item.icon}</div>
              <div>
                <p className="text-gray-700">{item.content}</p>
                <p className="text-sm text-gray-500">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrangChu;
