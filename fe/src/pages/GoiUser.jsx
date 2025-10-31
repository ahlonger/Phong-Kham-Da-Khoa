// src/pages/GoiUser.jsx
import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import bannerImggoi from "../assets/bannerdichvu.jpg";

const API_BASE = "http://localhost:3000"; // server BE của bạn

function formatPrice(v) {
  if (v === null || v === undefined) return "";
  const n = typeof v === "number" ? v : Number(v);
  if (Number.isNaN(n)) return String(v);
  return n.toLocaleString("vi-VN") + "đ";
}

// helper build URL ảnh
function buildImageUrl(imagePath) {
  if (!imagePath) return bannerImggoi;
  if (imagePath.startsWith("http")) return imagePath;
  return `${API_BASE}/${imagePath.replace(/\\/g, "/")}`;
}

const GoiUser = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // lấy từ khóa từ navbar?search=...
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchKeyword = (params.get("search") || "").toLowerCase().trim();

  // fetch dịch vụ từ BE
  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setErr("");
      try {
        const res = await fetch(`${API_BASE}/api/service`);
        const json = await res.json();
        const list = Array.isArray(json) ? json : json?.data || [];
        const normalized = list.map((s) => ({
          id: s.id,
          title: s.title,
          desc: s.desc,
          price: s.price,
          image: buildImageUrl(s.image),
          validity: s.validity || "Thời hạn 6 tháng",
        }));
        if (!cancelled) setServices(normalized);
      } catch (e) {
        if (!cancelled) setErr("Không tải được danh sách dịch vụ.");
        console.error(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // lọc theo từ khóa
  const filteredServices = useMemo(() => {
    const list = services || [];
    if (!searchKeyword) return list;
    return list.filter(
      (s) =>
        s.title?.toLowerCase().includes(searchKeyword) ||
        s.desc?.toLowerCase().includes(searchKeyword)
    );
  }, [services, searchKeyword]);

  const handleBuy = (service) => {
    // Lấy user (nếu có) để auto-fill
    let storedUser = null;
    try {
      storedUser = JSON.parse(sessionStorage.getItem("user") || "null");
    } catch {
      storedUser = null;
    }

    // Chuẩn bị dữ liệu cho PaymentForm (đã dùng trong app của bạn)
    const gia = Number(service.price) || 0;
    const soTienCocMacDinh = gia > 0 ? Math.round(gia * 0.1) : 100000;

    const pendingBooking = {
      type: "package",  
      // Thông tin cơ bản (có thể rỗng nếu người dùng chưa đăng nhập)
      hoten: storedUser?.name || storedUser?.fullName || "",
      email: storedUser?.email || "",
      sdt: storedUser?.phone || "",
      diachi: storedUser?.address || "",
      ghichu: `Mua gói dịch vụ: ${service.title}`,
      // Không phải lịch hẹn, nhưng PaymentForm có hiển thị => đặt tạm thời gian hiện tại để tránh "Invalid Date"
      thoigianhen: new Date().toISOString(),
      gioitinh: storedUser?.gioitinh || "",

      // Gắn dịch vụ
      serviceId: service.id,
      dichvu: service.title,
      giaDichVu: gia,


      // Đã đồng ý điều khoản (tùy bạn)
      dongy: true,

      // Gợi ý tiền cọc (10% hoặc 100k)
      soTienCoc: soTienCocMacDinh,
    };

    sessionStorage.setItem("pendingBooking", JSON.stringify(pendingBooking));

    // Điều hướng sang trang thanh toán
    // ⚠️ Nếu route của bạn khác (vd "/payment"), sửa lại bên dưới cho đúng:
    navigate("/thanhtoan");
  };

  return (
    <>
      <Navbar />

      <img
        src={bannerImggoi}
        alt="Banner"
        className="w-full mt-16 h-[500px] object-cover"
      />

      <section className="max-w-7xl mx-auto p-4 md:p-10 mt-20 md:mt-28 text-center bg-gray-50 rounded-xl shadow">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0077cc] mb-8">
          Gói dịch vụ nổi bật
        </h2>

        {err && <p className="text-red-500 font-semibold mb-4">{err}</p>}

        {searchKeyword && filteredServices.length === 0 && !loading && (
          <p className="text-red-500 font-semibold mb-4">
            Không tìm thấy dịch vụ phù hợp với từ khóa: "{searchKeyword}"
          </p>
        )}

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow animate-pulse">
                <div className="w-full h-40 bg-gray-200 mb-4 rounded" />
                <div className="h-4 bg-gray-200 mb-2 rounded" />
                <div className="h-3 bg-gray-200 mb-2 rounded" />
                <div className="h-6 bg-gray-200 mb-3 rounded w-1/2" />
                <div className="h-8 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-5 rounded-xl shadow hover:-translate-y-1 transition relative"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded mb-4"
                  onError={(e) => (e.currentTarget.src = bannerImggoi)}
                />
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
                <span className="block font-bold text-[#e74c3c] mb-3">
                  {formatPrice(service.price)}
                </span>
                {service.validity && (
                  <p className="text-sm text-gray-500 mb-3">{service.validity}</p>
                )}
                <button
                  onClick={() => handleBuy(service)}
                  className="bg-[#0077cc] text-white px-4 py-2 rounded hover:bg-[#005fa3]"
                >
                  Mua
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Phần lợi ích */}
      <div className="max-w-7xl mx-auto p-4 md:p-10 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0077cc] mb-8 text-center">
          Lợi ích khi sử dụng gói dịch vụ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Tiết kiệm chi phí so với khám lẻ từng lần.",
            "Ưu tiên lịch hẹn và được chăm sóc bởi đội ngũ bác sĩ giàu kinh nghiệm.",
            "Hưởng nhiều khuyến mãi và dịch vụ kèm theo.",
            "Thời hạn dài – linh hoạt trong sử dụng.",
            "Hỗ trợ trả góp không lãi suất cho các gói lớn.",
            "Được bảo hành và hỗ trợ sau điều trị.",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-500 text-2xl" />
                <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form tư vấn */}
      <section className="max-w-xl mx-auto mt-16 bg-white p-8 rounded-xl shadow text-left">
        <h3 className="text-2xl font-bold text-[#0077cc] mb-6 text-center">
          Bạn cần tư vấn thêm?
        </h3>
        <form className="space-y-4">
          <input type="text" placeholder="Họ và tên" className="w-full p-3 rounded border" />
          <input type="tel" placeholder="Số điện thoại" className="w-full p-3 rounded border" />
          <textarea placeholder="Nội dung cần tư vấn..." className="w-full p-3 rounded border" rows="4" />
          <button className="w-full bg-[#0077cc] text-white py-2 rounded hover:bg-[#005fa3]">
            Gửi yêu cầu
          </button>
        </form>
      </section>
    </>
  );
};

export default GoiUser;
