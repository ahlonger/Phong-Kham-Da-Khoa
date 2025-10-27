const validateUser = (data, file) => {
   const errors = {};
    if (!data.name) {
     errors.name = 'Vui lòng nhập tên';
   }
    if (!data.email) {
     errors.email = 'Vui lòng nhập email';
   }
    if (!data.password) {
     errors.password = 'Vui lòng nhập email';
   }

   if (!data.role) {
     errors.role = 'Vui lòng nhập phone';
   }

   if (!file) {
     errors.avatar = 'Vui lòng upload avatar';
   } else {
     // Kiểm tra định dạng của file avatar
     const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
     if (!allowedFormats.includes(file.mimetype)) {
       errors.avatar = 'Định dạng file không hợp lệ. Chỉ chấp nhận JPEG, PNG hoặc GIF';
     }
      // Kiểm tra dung lượng của file avatar (giả sử giới hạn là 1MB)
     const maxSize = 1024 * 1024; // 1MB
     if (file.size > maxSize) {
       errors.avatar = 'Dung lượng file quá lớn. Vui lòng chọn file có dung lượng nhỏ hơn 1MB';
     }
   }
 
   // Kiểm tra các trường khác và thêm các lỗi nếu cần
    return errors;
 };
  module.exports = validateUser;
