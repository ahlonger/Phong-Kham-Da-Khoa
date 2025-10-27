import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import Api from "../components/Api";

const ThongTinCaNhan = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gioitinh: "",
    chuyenmon: "",
    namkinhnghiem: "",
    gioithieu: "",
    thanhtuu: "",
  });
  const [avatarFile, setAvatarFile] = useState(null);

  // ✅ Lấy thông tin người dùng từ localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setForm({
        name: storedUser.name || "",
        email: storedUser.email || "",
        phone: storedUser.phone || "",
        address: storedUser.address || "",
        gioitinh: storedUser.gioitinh || "",
        chuyenmon: storedUser.chuyenmon || "",
        namkinhnghiem: storedUser.namkinhnghiem || "",
        gioithieu: storedUser.gioithieu || "",
        thanhtuu: storedUser.thanhtuu || "",
      });
      setSelectedImage(
        storedUser.avatar ? `http://localhost:3000${storedUser.avatar}` : null
      );
    }
  }, []);

  // ✅ Xử lý khi chọn ảnh mới
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // ✅ Cập nhật form text
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Gửi dữ liệu cập nhật
  const handleSave = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Chưa đăng nhập!");
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value ?? "");
      });
      if (avatarFile) formData.append("avatar", avatarFile);

      const res = await Api.put(`/user/${user.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Cập nhật thành công!");
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
    } catch (err) {
      console.error("Lỗi khi cập nhật:", err);
      alert("❌ Cập nhật thất bại!");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Navbar2
        isOpen={isSidebarOpen}
        toggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Nội dung chính */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } p-6`}
      >
        <h1 className="text-2xl font-bold mb-6 text-blue-700 text-center">
          Quản Lý Thông Tin Bác Sĩ
        </h1>

        <div className="bg-white shadow p-6 rounded-lg max-w-2xl mx-auto">
          {/* Ảnh đại diện */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden border shadow">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <label className="mt-4 cursor-pointer text-sm font-medium text-blue-600 hover:underline">
              Chọn ảnh đại diện
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Họ tên</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Số điện thoại</label>
              <input
                name="phone"
                type="text"
                value={form.phone}
                onChange={(e) => {
                  const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setForm({ ...form, phone: onlyDigits });
                }}
                inputMode="numeric"
                maxLength={10}
                placeholder="Nhập 10 số điện thoại"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Địa chỉ</label>
              <input
                name="address"
                type="text"
                value={form.address}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Giới tính</label>
              <select
                name="gioitinh"
                value={form.gioitinh}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Chọn giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Chuyên khoa</label>
              <input
                name="chuyenmon"
                type="text"
                value={form.chuyenmon}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="VD: Tai Mũi Họng, Nha Khoa..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Kinh nghiệm làm việc</label>
              <input
                name="namkinhnghiem"
                type="number"
                value={form.namkinhnghiem}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="VD: 5 (năm)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Giới thiệu bản thân</label>
              <textarea
                name="gioithieu"
                value={form.gioithieu}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                rows="4"
                placeholder="Mô tả chi tiết về bản thân..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium">Thành tựu</label>
              <textarea
                name="thanhtuu"
                value={form.thanhtuu}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                rows="3"
                placeholder="Liệt kê thành tích nổi bật..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Lưu Thay Đổi
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ThongTinCaNhan;
