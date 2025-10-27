// src/pages/DanhGiaUser.jsx
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Navbar from "../components/Navbar";

const DanhGiaUser = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoggedIn] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [reviews] = useState([
    {
      name: "Phạm Minh Quân",
      rating: 4,
      date: "25/06/2025",
      comment: "Dịch vụ rất tốt, bác sĩ tận tâm. Tôi rất hài lòng!",
      doctor: "BS. Phạm Hữu Thân Thương",
      service: "Gói Khám Tổng Quát",
    },
    {
      name: "Lê Thanh Hà",
      rating: 3,
      date: "25/06/2025",
      comment: "Dịch vụ tốt, nhưng cần cải thiện thời gian chờ.",
      doctor: "BS. Trần Thị B",
      service: "Gói Làm Trắng Răng",
    },
    {
      name: "Phạm Hữu Thân Thương",
      rating: 5,
      date: "25/06/2025",
      comment: "Tuyệt vời, sẽ quay lại lần nữa!",
      doctor: "BS. Lê Văn C",
      service: "Gói Niềng Răng Trả Góp",
    },
  ]);

  const doctors = [
    { id: 1, name: "BS. Phạm Hữu Thân Thương", spec: "Phụ Khoa" },
    { id: 2, name: "BS. Trần Thị B", spec: "Nha khoa" },
    { id: 3, name: "BS. Lê Văn C", spec: "Cấy ghép Implant" },
    { id: 4, name: "BS. Nguyễn Tấn Dũng", spec: "Tổng quát" },
    { id: 5, name: "BS. Phạm Minh Quân", spec: "Răng hàm mặt" },
    { id: 6, name: "BS. Lê Thanh Hà", spec: "Khám mắt" },
    { id: 7, name: "BS. Võ Hồ Thành Trung", spec: "Ngoại khoa" },
    { id: 8, name: "BS. Phạm Thị D", spec: "Nha khoa thẩm mỹ" },
  ];

  const services = [
    { title: "Gói Khám Tổng Quát", desc: "Khám răng tổng thể, chụp X-quang, tư vấn chuyên sâu với bác sĩ.", price: "500.000đ" },
    { title: "Gói Làm Trắng Răng", desc: "Làm trắng răng công nghệ Laser Whitening không ê buốt.", price: "1.200.000đ" },
    { title: "Gói Niềng Răng Trả Góp", desc: "Niềng răng mắc cài kim loại, hỗ trợ trả góp 0% lãi suất.", price: "19.000.000đ" },
  ];

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("Bạn phải đăng nhập để thực hiện đánh giá!");
      return;
    }
    if (rating > 0 && comment.trim() && selectedDoctor && selectedService) {
      alert("Cảm ơn bạn đã đánh giá!");
      setRating(0);
      setComment("");
      setSelectedDoctor("");
      setSelectedService("");
    } else {
      alert("Vui lòng chọn số sao, bác sĩ, dịch vụ và nhập bình luận!");
    }
  };

  return (
    <>
      <Navbar />
      <section className="max-w-screen-lg w-full mx-auto my-10 p-4 md:p-10 pt-20 bg-gray-50 text-center rounded-xl shadow">
        <h2 className="text-xl md:text-2xl font-bold text-[#0077cc] mb-6">
          Đánh giá của bạn
        </h2>

        <div className="mb-8 text-left">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Đánh giá từ khách hàng
          </h3>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow mb-4 flex flex-col"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-medium">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={16}
                    className={
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="mt-2 text-gray-600">Bác sĩ: {review.doctor}</p>
              <p className="mt-1 text-gray-600">Dịch vụ: {review.service}</p>
              <p className="mt-2 text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow w-full">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Viết đánh giá của bạn
          </h3>
          <form
            onSubmit={handleSubmitReview}
            className="space-y-4 text-left w-full"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <FaStar
                    key={index}
                    size={30}
                    className={`cursor-pointer ${
                      ratingValue <= rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    onClick={() => handleRating(ratingValue)}
                  />
                );
              })}
            </div>
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Chọn bác sĩ</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name} ({doctor.spec})
                </option>
              ))}
            </select>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Chọn dịch vụ gói</option>
              {services.map((service, index) => (
                <option key={index} value={service.title}>
                  {service.title} ({service.price})
                </option>
              ))}
            </select>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Nhập nội dung đánh giá..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-[#0077cc] text-white py-2 rounded-lg hover:bg-[#005fa3] transition"
            >
              Gửi
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default DanhGiaUser;