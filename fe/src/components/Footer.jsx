// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0077cc] text-white pt-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Phòng khám Smart Health</h3>
          <p className="mb-2">Phòngg khám Smart Health – Trao nụ cười, gửi niềm tin!</p>
          <p>Chăm sóc sức khỏe toàn diện với đội ngũ bác sĩ chuyên nghiệp và công nghệ hiện đại.</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Liên kết</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Trang chủ</a></li>
            <li><a href="#" className="hover:underline">Dịch vụ</a></li>
            <li><a href="#" className="hover:underline">Gói</a></li>
            <li><a href="#" className="hover:underline">Bác sĩ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Liên hệ</h4>
          <p>Địa chỉ: Nguyễn Văn Linh - Đà Nẵng</p>
          <p>Điện thoại: 0123 456 789</p>
          <p>Email: ahlong@gmail.com</p>
        </div>
      </div>

      <div className="text-center text-sm border-t border-white/30 mt-6 py-4">
        &copy; 2025 Phòng khám Smart Health. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
