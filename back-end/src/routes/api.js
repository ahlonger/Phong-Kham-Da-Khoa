const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController');
const bookingController = require('../controllers/bookingController')
const serviceController = require('../controllers/servicecontrollers');
const workScheduleController = require("../controllers/lichlamviecController");
// Định nghĩa các tuyến đường API ở đây

//User
// user đăng ký
router.post('/register',userController.upload,userController.createUser)

// user đăng nhập
router.post('/login', userController.loginUser);

router.get('/user', userController.listUsers);

// Lấy chi tiết 1 user theo id
router.get('/user/:id', userController.getUserById);

// cập nhật user (mới)
router.put('/user/:id', userController.upload, userController.updateUser);

router.post('/logout', userController.logoutUser);

// DELETE /api/user/:id - Xóa user thật trong DB
router.delete('/user/:id', userController.deleteUser);

// Quên mật khẩu
router.post('/forgot-password', userController.forgotPassword);

router.post('/reset-password/:token', userController.resetPassword);

//Booking
// đặt lịch
router.post('/booking', bookingController.createBooking);
// GET danh sách lịch hẹn
router.get('/booking', bookingController.getAllBookings);

router.put('/booking/:id', bookingController.updateBooking);

router.patch('/booking/:id', bookingController.cancelBooking);

// CRUD


// GET /api/services/with-doctors - Lấy dịch vụ kèm bác sĩ
//router.get('/services-doctors', serviceController.getDichvusWithDoctors);

// GET /api/services - Lấy tất cả dịch vụ
router.get('/service', serviceController.getDichvus);

// GET /api/services/:id - Lấy dịch vụ theo ID
//router.get('/service/:id', serviceController.getDichvu);

//  Cho phép upload ảnh
router.post('/service', serviceController.upload.single('image'), serviceController.createDichvu);
router.put('/service/:id', serviceController.upload.single('image'), serviceController.updateDichvu);


// DELETE /api/services/:id - Xóa dịch vụ
router.delete('/service/:id', serviceController.deleteDichvu);

//lịch làm việc
router.get("/lichlamviec", workScheduleController.list);
router.post("/lichlamviec", workScheduleController.create);
router.put("/lichlamviec/:id", workScheduleController.update);
router.delete("/lichlamviec/:id", workScheduleController.remove);

module.exports = router;
