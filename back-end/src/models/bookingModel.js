const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

// Tạo đặt lịch (hỗ trợ doctorId/serviceId + giữ legacy text)
const createBooking = async (data) => {
  const {
    hoten, email, sdt, diachi, ghichu, thoigianhen, dongy,
    doctorId, serviceId,gioitinh,
    // legacy text (tuỳ): để UI cũ vẫn chạy
    bacsi, dichvu,
  } = data;

  return prisma.booking.create({
    data: {
      hoten,
      email,
      sdt,
      diachi,
      ghichu: ghichu ?? null,
      gioitinh,
      thoigianhen,
      dongy: Boolean(dongy),

      // legacy text (không bắt buộc)
      bacsi:  bacsi  ?? undefined,
      dichvu: dichvu ?? undefined,

      // liên kết FK (nếu có)
      ...(doctorId ? { doctor:  { connect: { id: Number(doctorId) } } } : {}),
      ...(serviceId ? { service: { connect: { id: Number(serviceId) } } } : {}),
    },
    include: {
      doctor:  { select: { id: true, name: true, email: true, avatar: true } },
      service: { select: { id: true, title: true, price: true } },
    },
  });
};

// Lấy danh sách (tuỳ chọn lọc theo bác sĩ & “hôm nay”)
const getBookings = async ({ doctorId, today } = {}) => {
  const where = {};

  if (doctorId) {
    where.doctorId = Number(doctorId);
  }

  if (today === true || today === 'true') {
    const start = new Date(); start.setHours(0, 0, 0, 0);
    const end   = new Date(); end.setHours(23, 59, 59, 999);
    where.thoigianhen = { gte: start, lte: end };
  }

  return prisma.booking.findMany({
    where,
    orderBy: { thoigianhen: 'desc' },
    include: {
      doctor:  { select: { id: true, name: true, email: true, avatar: true } },
      service: { select: { id: true, title: true, price: true } },
    },
  });
};

const updateBooking = async (id, data) => {
  const payload = {};
  if (typeof data.xacnhan === 'boolean') payload.xacnhan = data.xacnhan;
  if (typeof data.huy === 'boolean')      payload.huy = data.huy;
  if (typeof data.trangThai === 'string')  payload.trangThai = data.trangThai;

  if (Object.keys(payload).length === 0) {
    // Không có gì để cập nhật
    return prisma.booking.findUnique({ where: { id: Number(id) } });
  }

  return prisma.booking.update({
    where: { id: Number(id) },
    data: payload,
  });
};

module.exports = {
  createBooking,
  getBookings,
  updateBooking
};
