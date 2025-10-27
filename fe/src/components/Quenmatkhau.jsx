import React, { useState } from "react";
import Api from "./Api";
import { useNavigate } from "react-router-dom"; 
const QuenMatKhau = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    // QuenMatKhau.jsx
    Api.post("forgot-password", { email })
      .then((res) => {
        const msg = res?.data?.message || "Vui lòng kiểm tra email để đặt lại mật khẩu!";
        setMessage(msg);

        // 👇 lấy resetUrl từ BE và chuyển sang trang đặt lại mật khẩu
        if (res?.data?.resetUrl) {
          const url = new URL(res.data.resetUrl);
          const token = url.pathname.split("/").pop(); // lấy phần :token
          alert("email xác nhận thành công")
          navigate(`/reset-password/${token}`);
        }
      })
      .catch((err) => {
        const msg = err?.response?.data?.message || "Không kết nối được máy chủ!";
        setMessage(msg);
      });

  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-96"
      >
        <h2 className="text-xl font-bold text-blue-700 mb-4">Quên mật khẩu</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email của bạn"
          className="w-full border px-3 py-2 rounded mb-3"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Gửi yêu cầu
        </button>
        {message && <p className="mt-3 text-center text-sm text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default QuenMatKhau;
