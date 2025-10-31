// src/pages/DichVuGoi.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Api from "../components/Api";

import {
  FaBoxOpen, FaFolderOpen, FaPen, FaTrash, FaPlus,
  FaHeartbeat, FaRegCalendarAlt, FaMoneyBillWave, FaTimes, FaImage,
} from "react-icons/fa";
import { Dialog } from "@headlessui/react";

const API_URL = "http://localhost:3000/api/service";

const formatVND = (n) =>
  typeof n === "number"
    ? n.toLocaleString("vi-VN") + "₫"
    : Number(n || 0).toLocaleString("vi-VN") + "₫";

const DichVuGoi = () => {
  const [goiDichVu, setGoiDichVu] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [listErr, setListErr] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
    image: "",
    file: null, // ✅ thêm file
    thoiHan: "",
    trangThai: "Đang hoạt động",
  });

  // ==== LOAD LIST ====
  // ==== LOAD LIST ====
const fetchList = async () => {
  setLoadingList(true);
  setListErr("");
  try {
    console.log("📡 Gọi API qua instance Axios:", "service");
    const res = await Api.get("service");
    console.log("📨 Phản hồi từ BE:", res);
    console.table(res.data?.data || []);
    setGoiDichVu(res.data?.data || []);
  } catch (e) {
    console.error("❌ Lỗi khi gọi API:", e);
    setListErr("Không tải được danh sách gói dịch vụ.");
  } finally {
    setLoadingList(false);
  }
};


  useEffect(() => {
  console.log("🚀 useEffect chạy, gọi fetchList()");
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
      file: null,
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
      file: null,
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
      file: null,
      thoiHan: "",
      trangThai: "Đang hoạt động",
    });
  };

  // ==== CREATE / UPDATE ====
  const handleSave = async () => {
    const price = formData.price.trim();
  if (!formData.title ) {
    alert("Vui lòng tên dịch vụ!");
    return;
  }
// ⚡ Kiểm tra dữ liệu
  if (!formData.title.trim()) {
    alert("Vui lòng nhập tên gói!");
    return;
  }
  // ⚡ Kiểm tra: giá phải là số nguyên dương
  if (!/^\d+$/.test(price) || Number(price) <= 0) {
    alert("Vui lòng nhập giá, giá phải là số , không chứa ký tự khác! và phải lớn hơn không");
    return;
  }


  if (!formData.desc.trim()) {
    alert("Vui lòng nhập mô tả!");
    return;
  }
  // Nếu đang tạo mới, bắt buộc phải có ảnh
  if (!isEditing && !formData.file) {
    alert("Vui lòng chọn ảnh gói dịch vụ!");
    return;
  }
  // Nếu đang sửa, cho phép giữ ảnh cũ nếu có, nhưng nếu trống thì phải chọn mới
  if (!formData.file && !isEditing) {
  alert("Vui lòng chọn ảnh hợp lệ trước khi lưu!");
  return;
}

  // ⚡ Kiểm tra trường thời hạn
if (!formData.thoiHan.trim()) {
  alert("Vui lòng nhập thời hạn!");
  return;
}

// ⚡ Kiểm tra: thời hạn phải là số nguyên dương
if (!/^\d+$/.test(formData.thoiHan)) {
  alert("Thời hạn phải là số và không chứa ký tự khác!");
  return;
}

if (Number(formData.thoiHan) <= 0) {
  alert("Thời hạn phải lớn hơn 0!");
  return;
}



  const fd = new FormData();
  fd.append("title", formData.title);
  fd.append("desc", formData.desc);
  fd.append("price", formData.price);
  if (formData.file) fd.append("image", formData.file);
  

  try {
    let res;
    if (isEditing) {
      res = await Api.put(`service/${editingId}`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      res = await Api.post("service", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }

    console.log("📦 Phản hồi khi lưu:", res.data);

    if (res.data.success && res.data.data) {
      // ✅ Cập nhật UI ngay lập tức
      setGoiDichVu((prev) => {
        if (isEditing) {
          return prev.map((item) =>
            item.id === editingId ? res.data.data : item
          );
        } else {
          return [res.data.data, ...prev];
        }
      });

      // ✅ Gọi lại API để đảm bảo dữ liệu đồng bộ & ảnh mới hiển thị liền
      await fetchList();
    }

    handleClose();
  } catch (e) {
    console.error("❌ Lỗi khi lưu:", e);
    alert("Lưu thất bại! .");
  }
};




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

          <button
            onClick={openCreate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 shadow"
          >
            <FaPlus /> Tạo gói mới
          </button>
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
                src={`http://localhost:3000/${goi.image}`}
                alt={goi.title}
                className="w-32 h-32 object-cover rounded-lg border"
                />



                  <div>
                    <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
                      <FaHeartbeat className="text-pink-600" /> {goi.title}
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

      {/* MODAL TẠO / SỬA */}
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
              placeholder="Tên gói"
              className="w-full border px-3 py-2 rounded"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <input
  type="text"
  placeholder="Giá (VND)"
  className="w-full border px-3 py-2 rounded"
  value={formData.price}
  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
/>


            <textarea
              placeholder="Mô tả"
              className="w-full border px-3 py-2 rounded"
              value={formData.desc}
              onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
            />

            {/* ✅ Chọn ảnh + xem preview */}
            <div>
              <label className="text-sm font-semibold mb-1 flex items-center gap-2">
                <FaImage /> Ảnh gói dịch vụ
              </label>
              {formData.image && (
  <img
    src={
      formData.image.startsWith("blob:")
        ? formData.image
        : `http://localhost:3000/${formData.image.replace(/^public[\\/]/, "")}`
    }
    alt="preview"
    className="w-32 h-32 object-cover rounded mb-2 border"
  />
)}

             <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ✅ Kiểm tra định dạng hợp lệ
    const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
    if (!validTypes.includes(file.type)) {
      alert(" Chỉ chấp nhận ảnh JPG, PNG hoặc GIF!");
      e.target.value = ""; // reset input
      return;
    }

    // ✅ Giới hạn kích thước (ví dụ: 2MB)
    const maxSizeMB = 2;
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(` Ảnh quá lớn! Vui lòng chọn ảnh nhỏ hơn ${maxSizeMB}MB.`);
      e.target.value = ""; // reset input
      return;
    }

    // ✅ Hợp lệ → tạo link tạm để hiển thị preview
    const previewUrl = URL.createObjectURL(file);
    setFormData((f) => ({
      ...f,
      file,
      image: previewUrl,
    }));
  }}
/>



            </div>

       <div className="flex gap-2">
  <input
    type="text"
    placeholder="Thời hạn"
    className="flex-1 border px-3 py-2 rounded"
    value={formData.thoiHan}
    onChange={(e) => {
      const val = e.target.value;
      // ✅ Cho phép nhập mọi thứ để test, không chặn tại đây
      setFormData({ ...formData, thoiHan: val });
    }}
  />
  <select
    className="w-28 border px-2 py-2 rounded"
    value={formData.donViThoiHan || "ngày"}
    onChange={(e) =>
      setFormData({ ...formData, donViThoiHan: e.target.value })
    }
  >
    <option value="ngày">Ngày</option>
    <option value="tháng">Tháng</option>
    <option value="năm">Năm</option>
  </select>
</div>


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
