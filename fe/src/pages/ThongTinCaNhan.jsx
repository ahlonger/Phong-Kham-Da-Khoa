import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import Api from "../components/Api";
import { useNavigate } from "react-router-dom";  
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
  const navigate = useNavigate();
  //  Lấy thông tin người dùng từ sessionStorage
  //  Lấy thông tin người dùng trực tiếp từ BE (GET /user/:id)

  // ✅ Kiểm tra đăng nhập
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (!storedUser || !storedUser.id) return;

    // Nếu có user thì gọi API lấy thông tin
    const fetchUser = async () => {
      try {
        const res = await Api.get(`user/${storedUser.id}`);
        const data = res.data;
        setUser(data);
        setForm({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
          gioitinh: data.gioitinh || "",
          chuyenmon: data.chuyenmon || "",
          namkinhnghiem: data.namkinhnghiem || "",
          gioithieu: data.gioithieu || "",
          thanhtuu: data.thanhtuu || "",
        });
        setSelectedImage(
          data.avatar ? `http://localhost:3000/${data.avatar}` : null
        );
      } catch (err) {
        console.error("❌ Lỗi khi tải thông tin người dùng:", err);
        alert("Không tải được thông tin cá nhân");
      }
    };

    fetchUser();
  }, [navigate]);


  // ✅ Xử lý khi chọn ảnh mới
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setSelectedImage(URL.createObjectURL(file)); // hiển thị ảnh mới ngay
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

      // 🟢 THÊM: cập nhật lại form, ảnh và localStorage sau khi lưu thành công
      alert("✅ Cập nhật thành công!");
      const updatedUser = { ...user, ...res.data };
      setUser(updatedUser);
      setForm({ ...form, ...updatedUser });
      if (updatedUser.avatar) {
        setSelectedImage(`http://localhost:3000/${updatedUser.avatar}`);
      }
      sessionStorage.setItem("user", JSON.stringify(updatedUser));
      // ✅ Sau khi cập nhật → chuyển sang trang hiển thị chi tiết
    navigate("/bacsi");
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

        {/* Form + Ảnh nằm ngang */}
        <div className="bg-white shadow p-6 rounded-lg max-w-6xl mx-auto flex gap-10 items-start">
          {/* Cột trái: Ảnh đại diện */}
          <div className="flex flex-col items-center w-1/3">
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

          {/* Cột phải: Form */}
          <form onSubmit={handleSave} className="w-2/3 grid grid-cols-2 gap-4">
            {/* Họ tên */}
            <div className="col-span-2">
              <label className="block text-sm font-medium">Họ tên</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Email */}
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

            {/* Số điện thoại */}
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

            {/* Địa chỉ */}
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

            {/* Giới tính */}
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

            {/* Chuyên môn */}
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

            {/* Kinh nghiệm */}
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
                
            {/* Giới thiệu */}
            <div className="col-span-2">
              <label className="block text-sm font-medium">Giới thiệu bản thân</label>
              <textarea
                name="gioithieu"
                value={form.gioithieu}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                rows="3"
                placeholder="Mô tả chi tiết về bản thân..."
              ></textarea>
            </div>

            {/* Thành tựu */}
            <div className="col-span-2">
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

            {/* Nút lưu */}
            <div className="col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Lưu Thay Đổi
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ThongTinCaNhan;
