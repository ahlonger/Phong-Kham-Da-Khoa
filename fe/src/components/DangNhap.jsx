import React, { useState } from "react";
import { FaEnvelope, FaLock, FaClinicMedical } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import bacsi1 from "../assets/bacsi1.png";
import Api from "./Api";

const DangNhap = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = { email, password };
    let errorsSubmit = {};
    let flag = true;

    if (!email) {
      errorsSubmit.email = "Vui lòng nhập email";
      flag = false;
    }
    if (!password) {
      errorsSubmit.password = "Vui lòng nhập mật khẩu";
      flag = false;
    }

    if(!email || !password){
      alert("Vui lòng nhập đầy dủ thông tin");
      flag = false;
    }
    if (!flag) {
      setErrors(errorsSubmit);
      return;
    }

    Api.post("login", login)
      .then((response) => {
        console.log("RESPONSE USER: ", response.data.user);

        if (response.data.message === "Đăng nhập thành công") {
          const user = response.data.user;
          alert(" Đăng nhập thành công!");

          // ✅ Xóa dữ liệu cũ trong sessionStorage (chỉ phiên này)
          sessionStorage.removeItem("user");
          sessionStorage.removeItem("token");

          // ✅ Lưu thông tin user và token vào sessionStorage
          sessionStorage.setItem("user", JSON.stringify(user));
          if (response.data.token) {
            sessionStorage.setItem("token", response.data.token);
          }

          // ✅ Điều hướng theo vai trò
          if (user.role === "admin") {
            navigate("/admin");
          } else if (user.role === "bacsi") {
            navigate("/bacsi");
          } else {
            navigate("/");
          }

        } else {
          alert(" Đăng nhập thất bại!");
        }
      })
      .catch((error) => {
        console.error(error);
        alert(" Email hoặc mật khẩu không đúng!");
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-50">
      {/* LEFT BANNER */}
      <div className="hidden md:flex flex-col justify-center items-center bg-blue-700 text-white w-1/2 p-10">
        <FaClinicMedical size={60} className="mb-4" />
        <h1 className="text-3xl font-bold mb-2">Phòng Khám Đa Khoa</h1>
        <p className="text-center max-w-xs">
          Dịch vụ y tế chất lượng cao. Đăng nhập để tiếp tục đặt lịch, theo dõi
          hồ sơ khám bệnh & chăm sóc sức khỏe.
        </p>
        <img src={bacsi1} alt="login-clinic" className="w-64 mt-6" />
      </div>

      {/* RIGHT FORM */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Đăng Nhập Tài Khoản
        </h2>
        <form className="space-y-4 w-full max-w-sm" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="text-blue-500 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email"
                className="w-full focus:outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Mật khẩu</label>
            <div className="flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="text-blue-500 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
                className="w-full focus:outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Đăng Nhập
          </button>

          <p className="text-center">
            <Link to="/quen-mat-khau" className="text-blue-600 hover:underline">
              Quên mật khẩu?
            </Link>
          </p>

          <p className="text-center text-gray-600">
            Bạn chưa có tài khoản?{" "}
            <Link to="/dang-ky" className="text-blue-600 hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default DangNhap;
