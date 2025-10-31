const serviceModel = require('../models/servicemodel');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// === Thiết lập nơi lưu file ảnh dịch vụ ===
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../public/uploads/service');
    fs.mkdirSync(uploadDir, { recursive: true }); // tạo thư mục nếu chưa có
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// chỉ chấp nhận file ảnh
const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|webp/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.test(ext)) cb(null, true);
  else cb(new Error('Chỉ chấp nhận file ảnh (jpg, png, gif, webp)'));
};

const upload = multer({ storage, fileFilter });

// ====== Lấy tất cả dịch vụ ======
const getDichvus = async (req, res) => {
  try {
    const data = await serviceModel.getAllDichvus();
    res.json({ success: true, data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Lỗi lấy danh sách dịch vụ' });
  }
};

// ====== Tạo dịch vụ mới ======
const createDichvu = async (req, res) => {
  try {
    console.log("🧾 req.file:", req.file);
    console.log("🧩 req.body:", req.body);

    const { title, desc, price } = req.body;
    let image = null;

    if (req.file) {
      image = 'uploads/service/' + req.file.filename;
    }

    if (!title || !price) {
      return res.status(400).json({
        success: false,
        message: 'Tiêu đề và giá là bắt buộc'
      });
    }

    const newDichvu = await serviceModel.createDichvu({
      title,
      desc,
      price,
      image
    });

    res.status(201).json({
  success: true,
  message: 'Tạo dịch vụ thành công',
  data: {
    ...newDichvu,
    image: newDichvu.image
      ? `${req.protocol}://${req.get('host')}/${newDichvu.image}`
      : null
  }
});

  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Lỗi tạo dịch vụ' });
  }
};

// ====== Cập nhật dịch vụ ======
const updateDichvu = async (req, res) => {
  try {
    console.log(" [UPDATE] req.file:", req.file);
    console.log(" [UPDATE] req.body:", req.body);
    const { id } = req.params;
    const { title, desc, price } = req.body;

    const existing = await serviceModel.getDichvuById(id);
    if (!existing) {
      return res.status(404).json({ success: false, message: 'Dịch vụ không tồn tại' });
    }

    let image = existing.image;
    if (req.file) {
      image = 'uploads/service/' + req.file.filename;
    }

    const updated = await serviceModel.updateDichvu(id, { title, desc, price, image });

    res.json({
  success: true,
  message: 'Cập nhật dịch vụ thành công',
  data: {
    ...updated,
    image: updated.image
      ? `${req.protocol}://${req.get('host')}/${updated.image}`
      : null
  }
});

  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Lỗi cập nhật dịch vụ' });
  }
};

// ====== Xóa dịch vụ ======
const deleteDichvu = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await serviceModel.getDichvuById(id);
    if (!existing) {
      return res.status(404).json({ success: false, message: 'Dịch vụ không tồn tại' });
    }

    // xóa ảnh vật lý (nếu có)
    if (existing.image) {
      const imgPath = path.join(__dirname, '../public', existing.image);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }

    await serviceModel.deleteDichvu(id);
    res.json({ success: true, message: 'Xóa dịch vụ thành công' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Lỗi xóa dịch vụ' });
  }
};

module.exports = {
  getDichvus,
  createDichvu,
  updateDichvu,
  deleteDichvu,
  upload
};
