const validateBooking = (data) => {
  const errors = {};

  if (!data.sdt || data.sdt.trim() == '') {
    errors.sdt = 'Vui lòng nhập số điện thoại';
  }

  if (!data.diachi || data.diachi.trim() == '') {
    errors.diachi = 'Vui lòng nhập địa chỉ';
  }

  if (!data.dichvu) {
    errors.dichvu = 'Vui lòng chọn dịch vụ';
  }

  if (!data.bacsi) {
    errors.bacsi = 'Vui lòng chọn bác sĩ';
  }

  if (!data.thoigianhen) {
    errors.thoigianhen = 'Vui lòng chọn thời gian hẹn';
  }

  if (!data.dongy) {
    errors.dongy = 'Bạn phải đồng ý với điều khoản';
  }
  if (!data.gioitinh) {
    errors.gioitinh = 'Bạn phải đồng ý với điều khoản';
  }
  return errors;
};

module.exports = validateBooking;
