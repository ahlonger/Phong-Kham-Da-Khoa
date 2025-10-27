// src/pages/DichVuGoi.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  FaBoxOpen, FaFolderOpen, FaPen, FaTrash, FaPlus,
  FaHeartbeat, FaRegCalendarAlt, FaMoneyBillWave, FaTimes,
} from "react-icons/fa";
import { Dialog } from "@headlessui/react";

// ====== Cấu hình API (khớp router BE của bạn) ======
const API_URL = "http://localhost:3000/api/service";

const formatVND = (n) =>
  typeof n === "number"
    ? n.toLocaleString("vi-VN") + "₫"
    : Number(n || 0).toLocaleString("vi-VN") + "₫";

const DichVuGoi = () => {
  // Danh sách dịch vụ từ BE
  const [goiDichVu, setGoiDichVu] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [listErr, setListErr] = useState("");

  // Modal tạo/sửa
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Map đúng BE: title, desc, price, image
  // thoiHan & trangThai chỉ để hiển thị UI (không gửi BE)
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
    image: "",
    thoiHan: "",
    trangThai: "Đang hoạt động",
  });

  // ==== LOAD LIST ====
  const fetchList = async () => {
    setLoadingList(true);
    setListErr("");
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`GET ${API_URL} failed`);
      const json = await res.json();
      const list = (Array.isArray(json) && json) || json.data || json.items || [];
      setGoiDichVu(Array.isArray(list) ? list : []);
    } catch (e) {
      console.error(e);
      setListErr("Không tải được danh sách gói dịch vụ.");
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // ==== OPEN/CLOSE MODAL ====
  const openCreate = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({
      title: "",
      desc: "",
      price: "",
      image: "",
      thoiHan: "",
      trangThai: "Đang hoạt động",
    });
    setIsOpen(true);
  };

  const openEdit = (goi) => {
    setIsEditing(true);
    setEditingId(goi.id);
    setFormData({
      title: goi.title ?? "",
      desc: goi.desc ?? "",
      price: goi.price ?? "",
      image: goi.image ?? "",
      thoiHan: goi.thoiHan ?? "",
      trangThai: goi.trangThai ?? "Đang hoạt động",
    });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsEditing(false);
    setEditingId(null);
    setFormData({
      title: "",
      desc: "",
      price: "",
      image: "",
      thoiHan: "",
      trangThai: "Đang hoạt động",
    });
  };

  // ==== CREATE/UPDATE ====
  const handleSave = async () => {
    if (!formData.title || !formData.price) {
      alert("Vui lòng nhập đầy đủ Tên (title) & Giá (price)!");
      return;
    }

    const payload = {
      title: String(formData.title).trim(),
      desc: String(formData.desc || "").trim(),
      price: Number(formData.price),
      image: String(formData.image || "").trim(),
    };

    try {
      if (isEditing && editingId) {
        const res = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("PUT failed");
      } else {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          const errText = await res.text().catch(() => "");
          throw new Error(`POST failed: ${errText}`);
        }
      }
      await fetchList();
      handleClose();
    } catch (e) {
      console.error(e);
      alert("Lưu thất bại. Kiểm tra log/BE giúp mình nhé!");
    }
  };

  // ==== DELETE ====
  const handleXoa = async (id) => {
    if (!window.confirm("Bạn chắc chắn muốn xoá?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("DELETE failed");
      await fetchList();
    } catch (e) {
      console.error(e);
      alert("Xoá thất bại.");
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6 pl-72">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <h1 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            <FaBoxOpen /> Quản lý dịch vụ gói
          </h1>

          <div className="flex items-center gap-2">
            <button
              onClick={openCreate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 shadow"
            >
              <FaPlus /> Tạo gói mới
            </button>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
          <FaFolderOpen /> Danh sách dịch vụ gói
        </h2>

        {loadingList && <div className="text-gray-600">Đang tải danh sách…</div>}
        {!!listErr && <div className="text-red-600">{listErr}</div>}

        {!loadingList && !listErr && (
          <div className="space-y-4">
            {goiDichVu.map((goi) => (
              <div
                key={goi.id}
                className="flex flex-col md:flex-row md:items-start bg-white p-4 rounded-xl shadow-md justify-between gap-4"
              >
                <div className="flex items-start gap-4 flex-1">
                  <img
                    src={goi.image || "/img/default.png"}
                    alt={goi.title}
                    className="w-28 h-28 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
                      <FaHeartbeat className="text-pink-600" />
                      {goi.title}
                    </h3>
                    <p className="text-gray-600 mt-1 flex items-center gap-2 flex-wrap">
                      <FaMoneyBillWave className="text-green-600" />
                      <span className="font-semibold text-black">
                        {formatVND(goi.price)}
                      </span>
                      {!!goi.thoiHan && (
                        <>
                          • <FaRegCalendarAlt /> {goi.thoiHan}
                        </>
                      )}
                      {!!goi.trangThai && (
                        <span
                          className={`ml-2 px-2 py-0.5 text-sm rounded-full ${
                            goi.trangThai === "Đang hoạt động"
                              ? "bg-green-200 text-green-800"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {goi.trangThai}
                        </span>
                      )}
                    </p>
                    <p className="text-gray-700 mt-1">{goi.desc}</p>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col gap-2">
                  <button
                    onClick={() => openEdit(goi)}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded flex items-center gap-2"
                  >
                    <FaPen /> Cập nhật
                  </button>
                  <button
                    onClick={() => handleXoa(goi.id)}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
                  >
                    <FaTrash /> Xoá
                  </button>
                </div>
              </div>
            ))}
            {goiDichVu.length === 0 && (
              <div className="text-gray-500">Chưa có gói dịch vụ.</div>
            )}
          </div>
        )}
      </div>

      {/* Modal Tạo + Sửa */}
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg bg-white rounded-xl p-6 shadow-lg space-y-4">
            <div className="flex justify-between items-center">
              <Dialog.Title className="text-lg font-bold text-blue-800">
                {isEditing ? "Cập nhật gói dịch vụ" : "Tạo gói dịch vụ"}
              </Dialog.Title>
              <button onClick={handleClose}>
                <FaTimes className="text-gray-500 hover:text-red-500" />
              </button>
            </div>

            <input
              type="text"
              placeholder="Tên gói (title)"
              className="w-full border px-3 py-2 rounded"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <input
              type="number"
              placeholder="Giá (price, VND)"
              className="w-full border px-3 py-2 rounded"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
            <textarea
              placeholder="Mô tả (desc)"
              className="w-full border px-3 py-2 rounded"
              value={formData.desc}
              onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
            />
            <input
              type="text"
              placeholder="Link ảnh (image)"
              className="w-full border px-3 py-2 rounded"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />

            {/* UI only (không gửi BE) */}
            <input
              type="text"
              placeholder="Thời hạn (không gửi BE)"
              className="w-full border px-3 py-2 rounded"
              value={formData.thoiHan}
              onChange={(e) => setFormData({ ...formData, thoiHan: e.target.value })}
            />
            <select
              className="w-full border px-3 py-2 rounded"
              value={formData.trangThai}
              onChange={(e) => setFormData({ ...formData, trangThai: e.target.value })}
            >
              <option>Đang hoạt động</option>
              <option>Ngừng cung cấp</option>
            </select>

            <div className="text-right">
              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                {isEditing ? "Lưu thay đổi" : "Tạo mới"}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default DichVuGoi;
