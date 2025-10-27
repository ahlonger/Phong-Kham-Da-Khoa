// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrangChu from "./pages/Trangchu";
import TaiKhoan from "./pages/Taikhoan";
import DanhGia from "./pages/Danhgia"; // Giữ nguyên cho Admin
import DichVuGoi from "./pages/DichVuGoi";
import LichHen from "./pages/LichHen";
import CaiDat from "./pages/CaiDat";
import BenhNhan from "./pages/BenhNhan";
import DangNhap from "./components/DangNhap";
import DangKy from "./components/DangKy";
import BacSi from "./pages/BacSi";
import DichVu from "./pages/DichVu";
import QuanLyLichLamViec from "./pages/QuanLyLichLamViec";
import LichDaDangKy from "./pages/LichDaDangKy";
import LichHenHomNay from "./pages/LichHenHomNay";
import GoiUser from "./pages/GoiUser";
import DanhSachBacSi from "./pages/DanhSachBacSi";
import DatLich from "./pages/DatLich";
import ThanhToan from "./pages/ThanhToan";
import DanhGiaUser from "./pages/DanhGiaUser"; // Thêm cho Bệnh nhân
import CaiDatBacSi from "./pages/CaiDatBacSi";
import ThongTinCaNhan from "./pages/ThongTinCaNhan"; // Thêm trang Thông Tin Cá Nhân
import ChatWidget from "./components/Chat";
import QuenMatKhau from "./components/Quenmatkhau";
import Datlaimatkhau from "./components/Datlaimatkhau";
import QuanLyThongTinCaNhan from "./pages/Quanlythongtincanhan";
const App = () => {
  return (
    <Router>
      {/* ChatWidget nằm ngoài Routes để hiển thị mọi trang */}
      <ChatWidget/>
      <Routes>
        {/* BenhNhan */}
        <Route path="/" element={<BenhNhan />} />
        <Route path="/dang-nhap" element={<DangNhap />} />
        <Route path="/dang-ky" element={<DangKy />} />
        <Route path="/goi" element={<GoiUser />} />
        <Route path="/danh-sach-bac-si" element={<DanhSachBacSi />} />
        <Route path="/dat-lich" element={<DatLich />} />
        <Route path="/danh-gia-user" element={<DanhGiaUser />} /> {/* Route mới cho Bệnh nhân */}
        <Route path="/thanhtoan" element={<ThanhToan />} />
        <Route path="/quen-mat-khau" element={<QuenMatKhau />} />
        <Route path="/reset-password/:token" element={<Datlaimatkhau />} />
        <Route path="/quan-ly-thong-tin-ca-nhan" element={<QuanLyThongTinCaNhan />} />
        {/* BacSi */}
        <Route path="/bacsi" element={<ThongTinCaNhan />} />
        <Route path="/dich-vu" element={<DichVu />} />
        <Route path="/quan-ly-lich-lam-viec" element={<QuanLyLichLamViec />} />
        <Route path="/lich-da-dang-ky" element={<LichDaDangKy />} />
        <Route path="/lich-hen-hom-nay" element={<LichHenHomNay />} />
        <Route path="/cai-dat-bac-si" element={<CaiDatBacSi />} />

        {/* Admin */}
        <Route path="/admin" element={<TrangChu />} />
        <Route path="/tai-khoan" element={<TaiKhoan />} />
        <Route path="/danh-gia" element={<DanhGia />} /> {/* Giữ nguyên cho Admin */}
        <Route path="/dich-vu-goi" element={<DichVuGoi />} />
        <Route path="/lich-hen" element={<LichHen />} />
        <Route path="/cai-dat" element={<CaiDat />} />
      </Routes>
    </Router>
  );
};

export default App;