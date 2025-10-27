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

// cập nhật user (mới)
router.put('/user/:id', userController.upload, userController.updateUser);

// Quên mật khẩu
router.post('/forgot-password', userController.forgotPassword);

router.post('/reset-password/:token', userController.resetPassword);

//Booking
// đặt lịch
router.post('/booking', bookingController.createBooking);
// GET danh sách lịch hẹn
router.get('/booking', bookingController.getAllBookings);

router.put('/booking/:id', bookingController.updateBooking);
// CRUD
router.get('/services-with-doctors', serviceController.getDichvusWithDoctors);

// GET /api/services/with-doctors - Lấy dịch vụ kèm bác sĩ
router.get('/services-doctors', serviceController.getDichvusWithDoctors);

// GET /api/services - Lấy tất cả dịch vụ
router.get('/service', serviceController.getDichvus);

// GET /api/services/:id - Lấy dịch vụ theo ID
router.get('/service/:id', serviceController.getDichvu);

// POST /api/services - Tạo dịch vụ mới
router.post('/service', serviceController.createDichvu);

// PUT /api/services/:id - Cập nhật dịch vụ
router.put('/service/:id', serviceController.updateDichvu);

// DELETE /api/services/:id - Xóa dịch vụ
router.delete('/service/:id', serviceController.deleteDichvu);

//lịch làm việc
router.get("/lichlamviec", workScheduleController.list);
router.post("/lichlamviec", workScheduleController.create);
router.put("/lichlamviec/:id", workScheduleController.update);
router.delete("/lichlamviec/:id", workScheduleController.remove);

module.exports = router;
