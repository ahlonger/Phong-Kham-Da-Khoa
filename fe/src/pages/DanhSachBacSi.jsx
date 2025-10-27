import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BacSiFallback from "../assets/phongkham.jpg";
import bannerImgbacsi from "../assets/bannerbacsi.jpg";
// Nếu bạn có axios instance:
import Api from "../components/Api"; // baseURL trỏ http://localhost:3000/api

const DanhSachBacSi = () => {
  const [selectedSpec, setSelectedSpec] = useState("Tất cả");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  // === Helper: chuẩn hoá URL ảnh (nếu BE trả về path tương đối) ===
  const toImageUrl = (avatar) => {
    if (!avatar) return BacSiFallback;
    // Nếu avatar đã là URL đầy đủ thì trả luôn
    if (/^https?:\/\//i.test(avatar)) return avatar;
    // Ngược lại, ghép với host BE nơi bạn serve static
    // Ví dụ BE: app.use('/uploads', express.static('public/uploads'));
    return `http://localhost:3000/${avatar.replace(/^\/+/, "")}`;
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // Nếu bạn đã có Api (axios instance) với baseURL = http://localhost:3000/api
        const res = await Api.get("/user");
        // Nếu không có Api instance thì dùng:
        // const res = await fetch("http://localhost:3000/api/user").then(r => r.json());

        // Chuẩn hoá dữ liệu
        const raw = Array.isArray(res.data) ? res.data : res.data?.users || [];
        const mapped = raw
          // lọc đúng role bác sĩ (đổi lại giá trị theo BE của bạn)
          .filter((u) =>
            typeof u.role === "string"
              ? ["doctor", "bacsi", "BacSi", "Bác sĩ"].includes(u.role)
              : u.role?.tenrole === "doctor"
          )
          .map((u, idx) => ({
            id: u.id ?? idx + 1,
            name: u.name || u.hoten || "Bác sĩ",
            spec: u.chuyenmon || u.specialty || "Khác",
            desc: u.namkinhnghiem ? `${u.namkinhnghiem} năm kinh nghiệm` : "",
            position: u.chucvu || u.position || "Bác sĩ",
            experience: Number(u.namkinhnghiem) || undefined,
            introduction: u.gioithieu || u.introduction || "—",
            achievements: u.thanhtuu || u.achievements || "—",
            image: toImageUrl(u.avatar),
          }));

        setDoctors(mapped);
      } catch (e) {
        console.error(e);
        setErr("Không tải được danh sách bác sĩ. Kiểm tra BE hoặc CORS.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const specs = useMemo(() => {
    const set = new Set(doctors.map((d) => d.spec).filter(Boolean));
    return ["Tất cả", ...Array.from(set)];
  }, [doctors]);

  const filteredDoctors =
    selectedSpec === "Tất cả"
      ? doctors
      : doctors.filter((d) => d.spec === selectedSpec);

  const handleViewDoctorDetail = (doctor) => setSelectedDoctor(doctor);
  const closeDetail = () => setSelectedDoctor(null);

  return (
    <>
      <Navbar />
      <img
        src={bannerImgbacsi}
        alt="Banner"
        className="w-full mt-16 h-[500px] object-cover"
      />

      <section className="max-w-7xl mx-auto p-4 md:p-10 mt-20 md:mt-28 text-center bg-gray-100 rounded-xl relative">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0077cc] mb-8">
          Danh sách bác sĩ
        </h2>

        {loading && <p className="text-gray-600">Đang tải...</p>}
        {err && (
          <p className="text-red-600 mb-4">
            {err}
          </p>
        )}

        {!loading && !err && (
          <>
            {/* Bộ lọc chuyên khoa */}
            <div className="mb-8">
              <select
                className="p-2 rounded border shadow"
                value={selectedSpec}
                onChange={(e) => setSelectedSpec(e.target.value)}
              >
                {specs.map((spec, i) => (
                  <option key={i} value={spec}>
                    {spec === "Tất cả" ? "Tất cả chuyên khoa" : spec}
                  </option>
                ))}
              </select>
            </div>

            {/* Danh sách bác sĩ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredDoctors.map((bs) => (
                <div
                  key={bs.id}
                  className="bg-white p-5 rounded-xl shadow hover:-translate-y-1 transition"
                >
                  <img
                    src={bs.image || BacSiFallback}
                    onError={(e) => (e.currentTarget.src = BacSiFallback)}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                    alt={bs.name}
                  />
                  <h3 className="font-semibold text-gray-800">{bs.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{bs.spec}</p>
                  {bs.desc && (
                    <p className="text-xs text-gray-500 italic mb-2">
                      {bs.desc}
                    </p>
                  )}
                  <button
                    onClick={() => handleViewDoctorDetail(bs)}
                    className="bg-[#0077cc] text-white px-4 py-2 rounded hover:bg-[#005fa3]"
                  >
                    Xem chi tiết
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Modal chi tiết bác sĩ */}
        {selectedDoctor && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeDetail}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeDetail}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src={selectedDoctor.image || BacSiFallback}
                  onError={(e) => (e.currentTarget.src = BacSiFallback)}
                  alt={selectedDoctor.name}
                  className="w-32 h-32 object-cover rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {selectedDoctor.name}
                  </h2>
                  <p className="text-gray-600">
                    <strong>Chức vụ:</strong> {selectedDoctor.position}
                  </p>
                  <p className="text-gray-600">
                    <strong>Chuyên ngành:</strong> {selectedDoctor.spec}
                  </p>
                  {selectedDoctor.experience !== undefined && (
                    <p className="text-gray-600">
                      <strong>Kinh nghiệm:</strong> {selectedDoctor.experience} năm
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#0077cc] mb-2">Giới thiệu</h3>
                <p className="text-gray-700">{selectedDoctor.introduction}</p>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[#0077cc] mb-2">Thành tựu</h3>
                <p className="text-gray-700">{selectedDoctor.achievements}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default DanhSachBacSi;
