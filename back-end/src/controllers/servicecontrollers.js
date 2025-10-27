const serviceModel = require('../models/servicemodel');

// Lấy tất cả dịch vụ kèm bác sĩ
const getDichvusWithDoctors = async (req, res) => {
  try {
    const data = await serviceModel.getAllDichvuWithDoctors();
    res.json({
      success: true,
      data: data
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ 
      success: false,
      message: 'Lỗi lấy dịch vụ kèm bác sĩ' 
    });
  }
};

// Lấy tất cả dịch vụ
const getDichvus = async (req, res) => {
  try {
    const data = await serviceModel.getAllDichvus();
    res.json({
      success: true,
      data: data
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ 
      success: false,
      message: 'Lỗi lấy danh sách dịch vụ' 
    });
  }
};

// Lấy dịch vụ theo ID
const getDichvu = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await serviceModel.getDichvuById(id);
    
    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Dịch vụ không tồn tại'
      });
    }
    
    res.json({
      success: true,
      data: data
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ 
      success: false,
      message: 'Lỗi lấy thông tin dịch vụ' 
    });
  }
};

// Tạo dịch vụ mới
const createDichvu = async (req, res) => {
  try {
    const { title, desc, price, image } = req.body;
    
    // Validate dữ liệu
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
      data: newDichvu
    });
  } catch (e) {
    console.error(e);
    
    if (e.code === 'P2002') {
      return res.status(400).json({
        success: false,
        message: 'Tiêu đề dịch vụ đã tồn tại'
      });
    }
    
    res.status(500).json({ 
      success: false,
      message: 'Lỗi tạo dịch vụ' 
    });
  }
};

// Cập nhật dịch vụ
const updateDichvu = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc, price, image } = req.body;
    
    // Kiểm tra dịch vụ tồn tại
    const existingDichvu = await serviceModel.getDichvuById(id);
    if (!existingDichvu) {
      return res.status(404).json({
        success: false,
        message: 'Dịch vụ không tồn tại'
      });
    }
    
    const updatedDichvu = await serviceModel.updateDichvu(id, {
      title,
      desc,
      price,
      image
    });
    
    res.json({
      success: true,
      message: 'Cập nhật dịch vụ thành công',
      data: updatedDichvu
    });
  } catch (e) {
    console.error(e);
    
    if (e.code === 'P2002') {
      return res.status(400).json({
        success: false,
        message: 'Tiêu đề dịch vụ đã tồn tại'
      });
    }
    
    res.status(500).json({ 
      success: false,
      message: 'Lỗi cập nhật dịch vụ' 
    });
  }
};

// Xóa dịch vụ
const deleteDichvu = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Kiểm tra dịch vụ tồn tại
    const existingDichvu = await serviceModel.getDichvuById(id);
    if (!existingDichvu) {
      return res.status(404).json({
        success: false,
        message: 'Dịch vụ không tồn tại'
      });
    }
    
    await serviceModel.deleteDichvu(id);
    
    res.json({
      success: true,
      message: 'Xóa dịch vụ thành công'
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ 
      success: false,
      message: 'Lỗi xóa dịch vụ' 
    });
  }
};

module.exports = {
  getDichvusWithDoctors,
  getDichvus,
  getDichvu,
  createDichvu,
  updateDichvu,
  deleteDichvu,
};