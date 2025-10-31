import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import {
  FaUserShield,
  FaLock,
  FaTrash,
  FaUnlock,
  FaTimes,
  FaSave,
} from "react-icons/fa";
import Api from "../components/Api";

const TaiKhoan = () => {
  const [accounts, setAccounts] = useState([]);
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [filterRole, setFilterRole] = useState("Tất cả");

  const [showModal, setShowModal] = useState(false);
  const [selectedAccIndex, setSelectedAccIndex] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const roles = ["admin", "bacsi", "user"];
  const permissionsList = [
    "Tạo tài khoản",
    "Khóa tài khoản",
    "Xem lịch hẹn",
    "Tạo lịch hẹn",
    "Duyệt đánh giá",
  ];

  // ✅ Lấy danh sách tài khoản từ backend
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await Api.get("user"); // ✅ bỏ dấu "/"
        setAccounts(res.data);
        setFilteredAccounts(res.data);
      } catch (err) {
        console.error("❌ Lỗi khi tải danh sách tài khoản:", err);
      }
    };
    fetchAccounts();
  }, []);

  // ✅ Lọc theo vai trò
  useEffect(() => {
    if (filterRole === "Tất cả") {
      setFilteredAccounts(accounts);
    } else {
      const filtered = accounts.filter(
        (acc) => acc.role?.toLowerCase() === filterRole.toLowerCase()
      );
      setFilteredAccounts(filtered);
    }
  }, [filterRole, accounts]);

  // 🟦 Mở modal phân quyền
  const openRoleModal = (idx) => {
    setSelectedAccIndex(idx);
    setSelectedRole(filteredAccounts[idx].role || "");
    setSelectedPermissions(filteredAccounts[idx].permissions || []);
    setShowModal(true);
  };

  const togglePermission = (perm) => {
    setSelectedPermissions((prev) =>
      prev.includes(perm)
        ? prev.filter((p) => p !== perm)
        : [...prev, perm]
    );
  };

  const saveRole = async () => {
    try {
      const acc = filteredAccounts[selectedAccIndex];
      await Api.put(`user/${acc.id}`, { role: selectedRole }); // ✅ bỏ "/"
      alert("✅ Cập nhật quyền thành công!");
      setShowModal(false);
    } catch (err) {
      console.error("❌ Lỗi khi lưu quyền:", err);
      alert("Không thể cập nhật quyền!");
    }
  };

  const lockAccount = async (idx) => {
    try {
      const acc = filteredAccounts[idx];
      await Api.put(`user/${acc.id}`, { status: "Đã khóa" }); // ✅ bỏ "/"
      const updated = [...filteredAccounts];
      updated[idx].status = "Đã khóa";
      setFilteredAccounts(updated);
      alert("🔒 Đã khóa tài khoản!");
    } catch (err) {
      console.error("❌ Lỗi khi khóa:", err);
    }
  };

  const unlockAccount = async (idx) => {
    try {
      const acc = filteredAccounts[idx];
      await Api.put(`user/${acc.id}`, { status: "Đang hoạt động" }); // ✅ bỏ "/"
      const updated = [...filteredAccounts];
      updated[idx].status = "Đang hoạt động";
      setFilteredAccounts(updated);
      alert("🔓 Đã mở khóa tài khoản!");
    } catch (err) {
      console.error("❌ Lỗi khi mở khóa:", err);
    }
  };

  // 🗑 Xóa tài khoản thật trong database
  const deleteAccount = async (idx) => {
    const acc = filteredAccounts[idx];
    if (
      window.confirm(
        `Bạn có chắc chắn muốn xoá tài khoản "${acc.name}" không?`
      )
    ) {
      try {
        await Api.delete(`user/${acc.id}`); // ✅ bỏ "/"
        const updated = filteredAccounts.filter((_, i) => i !== idx);
        setFilteredAccounts(updated);
        setAccounts(accounts.filter((a) => a.id !== acc.id));
        alert(`✅ Đã xoá tài khoản "${acc.name}" khỏi hệ thống!`);
      } catch (err) {
        console.error("❌ Lỗi khi xóa tài khoản:", err);
        alert("Không thể xóa tài khoản này!");
      }
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6 pl-72">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaUserShield /> Quản lý tài khoản
        </h1>

        {/* 🔍 Bộ lọc vai trò */}
        <div className="flex items-center gap-3 mb-4">
          <label className="font-semibold text-gray-700">Bộ lọc vai trò:</label>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="Tất cả">Tất cả</option>
            <option value="bacsi">Bác sĩ</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <span className="text-gray-500 text-sm">
            Tổng: {filteredAccounts.length} tài khoản
          </span>
        </div>

        {/* Bảng tài khoản */}
        <div className="overflow-x-auto rounded shadow border bg-white">
          <table className="min-w-full">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-4 py-3 border-b text-left">Họ và tên</th>
                <th className="px-4 py-3 border-b text-left">Email</th>
                <th className="px-4 py-3 border-b text-left">Số điện thoại</th>
                <th className="px-4 py-3 border-b text-left">Trạng thái</th>
                <th className="px-4 py-3 border-b text-left">Vai trò</th>
                <th className="px-4 py-3 border-b text-left">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredAccounts.length > 0 ? (
                filteredAccounts.map((acc, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{acc.name}</td>
                    <td className="px-4 py-2 border-b">{acc.email}</td>
                    <td className="px-4 py-2 border-b">{acc.phone || "—"}</td>
                    <td className="px-4 py-2 border-b">
  <span
    className={`font-semibold ${
      acc.status === "Đang hoạt động"
        ? "text-green-600"
        : "text-red-600"
    }`}
  >
    {acc.status === "Đang hoạt động"
      ? "Đang hoạt động"
      : "Không hoạt động"}
  </span>
</td>

                    <td className="px-4 py-2 border-b">
                      {acc.role || "Chưa phân quyền"}
                    </td>
                   <td className="px-4 py-2 border-b">
  <div className="flex flex-wrap gap-2">
    {acc.status === "Đang hoạt động" ? (
      // 🟢 Nếu tài khoản đang hoạt động -> chỉ hiển thị nút "Khóa"
      <button
        onClick={() => lockAccount(idx)}
        className="flex items-center gap-1 px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600 text-sm"
      >
        <FaLock /> Khóa
      </button>
    ) : (
      // 🔴 Nếu tài khoản không hoạt động -> hiển thị đủ 3 nút
      <>
        <button
          onClick={() => openRoleModal(idx)}
          className="flex items-center gap-1 px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 text-sm"
        >
          <FaUserShield /> Phân quyền
        </button>
        <button
          onClick={() => unlockAccount(idx)}
          className="flex items-center gap-1 px-2 py-1 text-white bg-green-500 rounded hover:bg-green-600 text-sm"
        >
          <FaUnlock /> Mở
        </button>
        <button
          onClick={() => deleteAccount(idx)}
          className="flex items-center gap-1 px-2 py-1 text-white bg-pink-500 rounded hover:bg-pink-600 text-sm"
        >
          <FaTrash /> Xóa
        </button>
      </>
    )}
  </div>
</td>


                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 py-4 border-b"
                  >
                    Không có tài khoản nào phù hợp
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal Phân quyền */}
        {showModal && selectedAccIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaUserShield /> Phân quyền cho{" "}
                {filteredAccounts[selectedAccIndex]?.name || "Người dùng"}
              </h2>

              <label className="block mb-2 font-semibold">Vai trò:</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full border rounded px-3 py-2 mb-4"
              >
                {roles.map((role, idx) => (
                  <option key={idx} value={role}>
                    {role}
                  </option>
                ))}
              </select>

              <label className="block mb-2 font-semibold">Quyền:</label>
              <div className="space-y-2 mb-4">
                {permissionsList.map((perm, idx) => (
                  <label key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedPermissions.includes(perm)}
                      onChange={() => togglePermission(perm)}
                    />
                    {perm}
                  </label>
                ))}
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={saveRole}
                  className="flex items-center gap-1 px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 text-sm"
                >
                  <FaSave /> Lưu
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex items-center gap-1 px-3 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                >
                  <FaTimes /> Đóng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaiKhoan;
