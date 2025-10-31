import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const ThongTinCaNhanChiTietUser = ({ onEdit }) => {  // 🟢 nhận prop onEdit
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Lấy thông tin từ sessionStorage
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (!storedUser || !storedUser.id) {
      alert("⚠️ Vui lòng đăng nhập trước khi xem thông tin!");
      navigate("/dang-nhap");
      return;
    }
    setUser(storedUser);
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-20 max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Hồ sơ cá nhân
        </h2>

        {/* ẢNH + Thông tin cơ bản */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={
              user.avatar
                ? `http://localhost:3000/${user.avatar}`
                : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Avatar"
            className="w-32 h-32 rounded-full border object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {user.name || "Chưa có tên"}
            </h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
          </div>
        </div>

        {/* Thông tin chi tiết */}
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div><b>Giới tính:</b> {user.gioitinh || "Chưa cập nhật"}</div>
          <div><b>Địa chỉ:</b> {user.address || "Chưa cập nhật"}</div>
        </div>

        {/* 🟢 Nút chỉnh sửa */}
        <div className="mt-8 text-right">
          <button
            onClick={onEdit} // 👉 Gọi callback từ parent để chuyển sang chế độ chỉnh sửa
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Chỉnh sửa lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThongTinCaNhanChiTietUser;
