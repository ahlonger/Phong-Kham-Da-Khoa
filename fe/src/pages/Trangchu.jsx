import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Api from "../components/Api";
import {
  FaCalendarAlt,
  FaUsers,
  FaBoxOpen,
  FaComments,
  FaPlus,
  FaCheck,
} from "react-icons/fa";

const TrangChu = () => {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString("vi-VN");

  // ✅ Trạng thái lưu số lượng thật từ backend
  const [counts, setCounts] = useState({
    bookings: 0,
    users: 0,
    services: 0,
  });

  // ✅ Kiểm tra đăng nhập
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      navigate("/dang-nhap");
    }
  }, [navigate]);

  // ✅ Lấy dữ liệu từ backend
  useEffect(() => {
  const fetchCounts = async () => {
    try {
      const [resUsers, resBookings, resServices] = await Promise.all([
        Api.get("user"),
        Api.get("booking"),
        Api.get("service"),
      ]);

      // 👇 tự phát hiện kiểu dữ liệu
      const extractCount = (res) => {
        if (Array.isArray(res.data)) return res.data.length;
        if (Array.isArray(res.data?.data)) return res.data.data.length;
        return 0;
      };

      setCounts({
        users: extractCount(resUsers),
        bookings: extractCount(resBookings),
        services: extractCount(resServices),
      });
    } catch (err) {
      console.error("❌ Lỗi tải số liệu:", err);
    }
  };

  fetchCounts();
}, []);


  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
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

        {/* ✅ Thống kê tổng quan (hiển thị số lượng thật từ BE) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl flex items-center space-x-4">
            <FaCalendarAlt className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-600">Lịch hẹn</p>
              <p className="text-xl font-bold">{counts.bookings}</p>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl flex items-center space-x-4">
            <FaUsers className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-600">Tài khoản</p>
              <p className="text-xl font-bold">{counts.users}</p>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl flex items-center space-x-4">
            <FaBoxOpen className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-600">Dịch vụ gói</p>
              <p className="text-xl font-bold">{counts.services}</p>
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
      </div>
    </div>
  );
};

export default TrangChu;
