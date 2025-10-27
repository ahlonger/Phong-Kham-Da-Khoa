const bookingModel = require('../models/bookingModel');
const validateBooking = require('../validation/bookingValidation');

// POST /booking
const createBooking = async (req, res) => {
  try {
    const data = { ...req.body };

    // Validate cơ bản của bạn
    const errors = validateBooking ? validateBooking(data) : {};
    if (errors && Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    // Chuyển đổi thời gian
    if (data.thoigianhen) data.thoigianhen = new Date(data.thoigianhen);

    // Ép kiểu id (nếu FE gửi string)
    if (data.doctorId)  data.doctorId  = Number(data.doctorId);
    if (data.serviceId) data.serviceId = Number(data.serviceId);

    // (Tuỳ) Ép bắt buộc chọn bác sĩ:
    // if (!data.doctorId) return res.status(400).json({ errors: { doctorId: 'Vui lòng chọn bác sĩ hợp lệ' }});

    const booking = await bookingModel.createBooking(data);
    return res.status(201).json({ message: 'Đặt lịch thành công', booking });
  } catch (error) {
    console.error('Lỗi đặt lịch:', error);
    return res.status(500).json({ message: 'Lỗi server khi đặt lịch' });
  }
};

// GET /booking  (hỗ trợ ?doctorId=...&today=true)
const getAllBookings = async (req, res) => {
  try {
    const { doctorId, today } = req.query;
    const bookings = await bookingModel.getBookings({ doctorId, today });
    return res.status(200).json(bookings);
  } catch (error) {
    console.error('Lỗi khi lấy danh sách lịch hẹn:', error);
    return res.status(500).json({ message: 'Lỗi server khi lấy lịch hẹn' });
  }
};

const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await bookingModel.updateBooking(id, req.body);
    return res.json(updated);
  } catch (error) {
    console.error('Lỗi cập nhật lịch hẹn:', error);
    return res.status(500).json({ message: 'Lỗi server khi cập nhật lịch hẹn' });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  updateBooking
};
