import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import { useNavigate } from "react-router-dom";

const ThongTinCaNhanChiTiet = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

 useEffect(() => {
  const storedUser = JSON.parse(sessionStorage.getItem("user"));

  // ❌ Nếu chưa đăng nhập → chuyển sang trang đăng nhập
  if (!storedUser || !storedUser.id) {
    navigate("/dang-nhap");
    return;
  }

  // ✅ Nếu đã đăng nhập → hiển thị thông tin chi tiết
  setUser(storedUser);
}, [navigate]);


  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navbar2
        isOpen={isSidebarOpen}
        toggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } p-6`}
      >
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          Hồ sơ cá nhân bác sĩ
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
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
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div><b>Giới tính:</b> {user.gioitinh || "Chưa cập nhật"}</div>
            <div><b>Địa chỉ:</b> {user.address || "Chưa cập nhật"}</div>
            <div><b>Chuyên khoa:</b> {user.chuyenmon || "Chưa có"}</div>
            <div><b>Kinh nghiệm:</b> {user.namkinhnghiem || "0"} năm</div>
            <div className="col-span-2">
              <b>Giới thiệu bản thân:</b> {user.gioithieu || "Chưa có"}
            </div>
            <div className="col-span-2">
              <b>Thành tựu:</b> {user.thanhtuu || "Chưa có"}
            </div>
          </div>

          <div className="mt-8 text-right">
            <button
              onClick={() => navigate("/bac-si-chinh-sua")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Chỉnh sửa lại
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThongTinCaNhanChiTiet;
