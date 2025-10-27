// src/pages/ResetMatKhau.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "./Api";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Datlaimatkhau = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showPw1, setShowPw1] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  const validate = () => {
    const e = {};
    if (!password) e.password = "Vui lòng nhập mật khẩu mới";
    else if (password.length < 6) e.password = "Mật khẩu tối thiểu 6 ký tự";

    if (!confirm) e.confirm = "Vui lòng nhập lại mật khẩu";
    else if (confirm !== password) e.confirm = "Mật khẩu nhập lại không khớp";

    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setSubmitting(true);
    Api.post(`/reset-password/${token}`, { password })
      .then((res) => {
        const msg = res?.data?.message || "Đặt lại mật khẩu thành công!";
        alert(msg);
        navigate("/dang-nhap");
      })
      .catch((err) => {
        const msg = err?.response?.data?.message || "Có lỗi xảy ra!";
        setErrors({ server: msg });
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50">
      <form onSubmit={submit} className="bg-white p-6 rounded shadow w-96 space-y-3">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Đặt lại mật khẩu</h2>

        {/* Mật khẩu mới */}
        <label className="block text-gray-700">Mật khẩu mới</label>
        <div className="flex items-center border rounded px-3 py-2">
          <input
            type={showPw1 ? "text" : "password"}
            value={password}
            onChange={(e) => { setPassword(e.target.value); setErrors((o)=>({ ...o, password: undefined })); }}
            placeholder="Nhập mật khẩu mới"
            className="w-full focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPw1((s) => !s)}
            className="ml-2 text-gray-600 hover:text-blue-500"
          >
            {showPw1 ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        {/* Nhập lại mật khẩu */}
        <label className="block text-gray-700">Nhập lại mật khẩu</label>
        <div className="flex items-center border rounded px-3 py-2">
          <input
            type={showPw2 ? "text" : "password"}
            value={confirm}
            onChange={(e) => { setConfirm(e.target.value); setErrors((o)=>({ ...o, confirm: undefined })); }}
            placeholder="Nhập lại mật khẩu mới"
            className="w-full focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPw2((s) => !s)}
            className="ml-2 text-gray-600 hover:text-blue-500"
          >
            {showPw2 ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors.confirm && <p className="text-red-500 text-sm">{errors.confirm}</p>}

        {errors.server && <p className="text-red-500 text-sm">{errors.server}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60"
        >
          {submitting ? "Đang xử lý..." : "Xác nhận"}
        </button>
      </form>
    </div>
  );
};

export default Datlaimatkhau;
