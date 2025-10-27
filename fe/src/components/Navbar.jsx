// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import phongkhamImage from "../assets/phongkham.jpg";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Lấy thông tin user từ localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/dang-nhap");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/goi?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="bg-blue-600 w-full fixed top-0 left-0 z-50 shadow text-white">
      <div className="flex items-center justify-between px-4 md:px-8 h-16">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-2 font-bold text-lg">
          <img
            src={phongkhamImage}
            alt="Logo"
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = require("../assets/default-avatar.png");
            }}
          />
          PHÒNG KHÁM ĐA KHOA SMART HEALTH
        </div>

        {/* Nav giữa (desktop) */}
        <nav className="hidden md:flex flex-grow justify-center gap-6 font-semibold">
          <Link to="/" className="hover:text-yellow-300">Trang chủ</Link>
          <Link to="/danh-sach-bac-si" className="hover:text-yellow-300">Bác sĩ</Link>
          <Link to="/goi" className="hover:text-yellow-300">Gói</Link>
          <Link to="/dat-lich" className="hover:text-yellow-300">Đặt lịch</Link>
          <Link to="/danh-gia-user" className="hover:text-yellow-300">Đánh giá</Link>
        </nav>

        {/* Góc phải (user/login) */}
        {user ? (
          <div className="relative">
            {/* Nút hiển thị tên người dùng */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-sm font-semibold flex items-center gap-1 bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded"
            >
              {user.name || "Tài khoản"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg border z-50">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/quan-ly-thong-tin-ca-nhan");
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Quản lý thông tin cá nhân
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-sm font-semibold space-x-2">
            <Link to="/dang-nhap" className="hover:text-yellow-300">Đăng nhập</Link> |
            <Link to="/dang-ky" className="hover:text-yellow-300">Đăng ký</Link>
          </div>
        )}

        {/* Hamburger icon (mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu di động */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-4 text-center font-semibold">
            <Link to="/" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Trang chủ</Link>
            <Link to="/danh-sach-bac-si" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Bác sĩ</Link>
            <Link to="/goi" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Gói</Link>
            <Link to="/dat-lich" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Đặt lịch</Link>
            <Link to="/danh-gia-user" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Đánh giá</Link>
          </nav>

          <div className="mt-4 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Tìm kiếm dịch vụ..."
              className="px-3 py-1 rounded-md text-black w-48 mx-auto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
            <div className="text-sm font-semibold text-center space-x-2">
              <Link to="/dang-nhap" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Đăng nhập</Link> |
              <Link to="/dang-ky" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Đăng ký</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
