// src/pages/QuanLyThongTinCaNhan.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Api from "../components/Api";
import XemLichHen from "./XemLichHen";
import { useNavigate, useLocation } from "react-router-dom";
import ThongTinCaNhanChiTietUser from "./ThongtincanhanchitietUser";

const QuanLyThongTinCaNhan = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("thongtin");
  const [editMode, setEditMode] = useState(false); // 🟢 Thêm trạng thái edit/view
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gioitinh: "",
    avatar: "",
    file: null,
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setForm({
        name: storedUser.name || "",
        email: storedUser.email || "",
        phone: storedUser.phone || "",
        address: storedUser.address || "",
        gioitinh: storedUser.gioitinh || "",
        avatar: storedUser.avatar || "",
        file: null,
      });
    }
  }, []);

  // ✅ Cleanup URL blob
  useEffect(() => {
    return () => {
      if (form.avatar && form.avatar.startsWith("blob:")) {
        URL.revokeObjectURL(form.avatar);
      }
    };
  }, [form.avatar]);

  // ✅ Cập nhật thông tin
 const handleUpdate = async (e) => {
  e.preventDefault();

  // ⚡ Kiểm tra dữ liệu trống
  if (
    !form.name.trim() ||
    !form.email.trim() ||
    !form.phone.trim() ||
    !form.address.trim() ||
    !form.gioitinh.trim()
  ) {
    alert(" Không thể cập nhật, vui lòng điền đầy đủ thông tin!");
    return;
  }

  // ⚡ Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    alert(" Email không hợp lệ!");
    return;
  }

  // ⚡ Kiểm tra số điện thoại (10 số)
  if (!/^\d{10}$/.test(form.phone)) {
    alert(" Số điện thoại phải gồm 10 chữ số!");
    return;
  }

  // ⚡ Kiểm tra avatar (nếu có chọn mới)
  if (form.file) {
    const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"];
    if (!validTypes.includes(form.file.type)) {
      alert(" Chỉ chấp nhận ảnh JPG, JPEG, PNG, GIF hoặc WEBP!");
      return;
    }

    const maxSizeMB = 2;
    if (form.file.size > maxSizeMB * 1024 * 1024) {
      alert(` Ảnh quá lớn! Vui lòng chọn ảnh nhỏ hơn ${maxSizeMB}MB.`);
      return;
    }
  }

  try {
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("address", form.address);
    formData.append("gioitinh", form.gioitinh);
    if (form.file) formData.append("avatar", form.file);

    const res = await Api.put(`/user/${user.id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("✅ Cập nhật thông tin thành công!");
    sessionStorage.setItem("user", JSON.stringify(res.data));
    setUser(res.data);
    setForm({
      ...form,
      file: null,
      avatar: res.data.avatar || form.avatar,
    });
    setEditMode(false);
  } catch (err) {
    console.error(err);
    alert(" Cập nhật thất bại!");
  }
};


  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-20 max-w-5xl mx-auto p-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Quản lý thông tin cá nhân
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => {
              setActiveTab("lichhen");
              setEditMode(false);
            }}
            className={`px-6 py-2 rounded-l-lg font-semibold ${
              activeTab === "lichhen"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border"
            }`}
          >
            Lịch hẹn của tôi
          </button>
          <button
            onClick={() => {
              setActiveTab("thongtin");
              setEditMode(false);
            }}
            className={`px-6 py-2 rounded-r-lg font-semibold ${
              activeTab === "thongtin"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border"
            }`}
          >
            Thông tin cá nhân
          </button>
        </div>

        {/* Nội dung */}
        {activeTab === "lichhen" && <XemLichHen />}

        {activeTab === "thongtin" &&
          (editMode ? (
            // 🟢 Chế độ chỉnh sửa
            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                Cập nhật thông tin cá nhân
              </h3>
              <form onSubmit={handleUpdate} className="space-y-3">
                {/* ẢNH */}
                <div>
                  <label className="block text-sm font-medium">Ảnh đại diện</label>
                  {form.avatar && (
                    <img
                      src={
                        form.avatar.startsWith("blob:")
                          ? form.avatar
                          : `http://localhost:3000/${form.avatar}`
                      }
                      alt="Avatar"
                      className="w-32 h-32 object-cover rounded-full mb-3 border"
                    />
                  )}
                  <input
  type="file"
  accept=".jpg,.jpeg,.png,.gif,.webp"
  onChange={(e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ✅ Danh sách định dạng hợp lệ
    const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"];
    if (!validTypes.includes(file.type)) {
      alert(" Chỉ chấp nhận ảnh JPG, JPEG, PNG, GIF hoặc WEBP!");
      e.target.value = "";
      return;
    }

    // ✅ Giới hạn dung lượng ảnh (≤ 2MB)
    const maxSizeMB = 2;
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(` Ảnh quá lớn! Vui lòng chọn ảnh nhỏ hơn ${maxSizeMB}MB.`);
      e.target.value = "";
      return;
    }

    // ✅ Hợp lệ → hiển thị preview
    const previewUrl = URL.createObjectURL(file);
    setForm({
      ...form,
      avatar: previewUrl,
      file,
    });
  }}
  className="w-full border px-3 py-2 rounded-md"
/>


                </div>

                {/* Họ tên */}
                <div>
                  <label className="block text-sm font-medium">Họ và tên</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border px-3 py-2 rounded-md"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border px-3 py-2 rounded-md"
                  />
                </div>

                {/* Số điện thoại */}
                <div>
                  <label className="block text-sm font-medium">Số điện thoại</label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) => {
                      const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setForm({ ...form, phone: onlyDigits });
                    }}
                    className="w-full border px-3 py-2 rounded-md"
                  />
                </div>

                {/* Địa chỉ */}
               <div>
  <label className="block text-sm font-medium">Địa chỉ</label>
  <input
    type="text"
    value={form.address}
    onChange={(e) => {
      // ✅ Chỉ cho phép chữ, số, khoảng trắng, dấu phẩy, dấu gạch ngang
      const value = e.target.value.replace(/[^a-zA-ZÀ-ỹ0-9\s,\-]/g, "");
      setForm({ ...form, address: value });
    }}
    className="w-full border px-3 py-2 rounded-md"
  />
</div>


                {/* Giới tính */}
                <div>
                  <label className="block text-sm font-medium">Giới tính</label>
                  <select
                    value={form.gioitinh}
                    onChange={(e) => setForm({ ...form, gioitinh: e.target.value })}
                    className="w-full border px-3 py-2 rounded-md"
                  >
                    <option value="">-- Chọn giới tính --</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setEditMode(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // 🟢 Chế độ xem chi tiết
            <ThongTinCaNhanChiTietUser onEdit={() => setEditMode(true)} />
          ))}
      </div>
    </div>
  );
};

export default QuanLyThongTinCaNhan;
