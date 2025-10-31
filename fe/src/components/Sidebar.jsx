// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaComments, FaBox, FaCalendarCheck, FaCog,FaCalendarAlt } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center space-x-2 p-2 rounded hover:bg-blue-100 ${
      location.pathname === path ? "bg-blue-200 font-semibold" : ""
    }`;

  return (
    <div className="w-64 bg-white min-h-screen shadow-md p-4 fixed top-0 left-0 bottom-0 right-14">
      <h2 className="text-2xl font-bold mb-8">Quản Lý</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/admin" className={linkClass("/admin")}>
            <FaHome /> <span>Trang chủ</span>
          </Link>
        </li>
        <li>
          <Link to="/tai-khoan" className={linkClass("/tai-khoan")}>
            <FaUser /> <span>Tài khoản</span>
          </Link>
        </li>
        <li>
          <Link to="/danh-gia" className={linkClass("/danh-gia")}>
            <FaComments /> <span>Đánh giá</span>
          </Link>
        </li>
        <li>
          <Link to="/dich-vu-goi" className={linkClass("/dich-vu-goi")}>
            <FaBox /> <span>Dịch vụ gói</span>
          </Link>
        </li>
        <li>
          <Link to="/lich-hen" className={linkClass("/lich-hen")}>
            <FaCalendarCheck /> <span>Lịch hẹn</span>
          </Link>
        </li>
        <li>
  <Link to="/admin-lich-lam-viec" className={linkClass("/admin/lich-lam-viec")}>
    <FaCalendarCheck /> <span>Lịch làm việc</span>
  </Link>
</li>


        <li>
          <Link to="/cai-dat" className={linkClass("/cai-dat")}>
            <FaCog /> <span>Cài đặt</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
