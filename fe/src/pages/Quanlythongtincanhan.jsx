import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Api from "../components/Api";
import XemLichHen from "./XemLichHen";

const QuanLyThongTinCaNhan = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("lichhen");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gioitinh: "",
  });

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
      });
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // gọi API PUT để cập nhật toàn bộ thông tin, bao gồm cả email
      const res = await Api.put(`/user/${user.id}`, form);
      alert("Cập nhật thông tin thành công!");

      // cập nhật localStorage và state user
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);

      // ✅ reset form sau khi cập nhật thành công
      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        gioitinh: "",
      });
    } catch (err) {
      console.error(err);
      alert("Cập nhật thất bại!");
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
            onClick={() => setActiveTab("lichhen")}
            className={`px-6 py-2 rounded-l-lg font-semibold ${
              activeTab === "lichhen"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border"
            }`}
          >
            Lịch hẹn của tôi
          </button>
          <button
            onClick={() => setActiveTab("thongtin")}
            className={`px-6 py-2 rounded-r-lg font-semibold ${
              activeTab === "thongtin"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border"
            }`}
          >
            Cập nhật thông tin
          </button>
        </div>

        {/* Nội dung */}
        {activeTab === "lichhen" && <XemLichHen />}
        {activeTab === "thongtin" && (
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              Cập nhật thông tin cá nhân
            </h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Họ và tên</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Số điện thoại
                </label>
                <input
  type="text"
  value={form.phone}
  onChange={(e) => {
    // chỉ giữ lại ký tự số và cắt tối đa 10 ký tự
    const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setForm({ ...form, phone: onlyDigits });
  }}
  inputMode="numeric"       // giúp hiển thị bàn phím số trên mobile
  maxLength={10}            // chặn nhập hơn 10 ký tự
  pattern="\d{10}"          // để HTML5 validation kiểm tra đúng 10 số
  placeholder="Nhập 10 số điện thoại"
  className="w-full border px-3 py-2 rounded-md"
/>

              </div>

              <div>
                <label className="block text-sm font-medium">Địa chỉ</label>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>

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

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Cập nhật
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuanLyThongTinCaNhan;
