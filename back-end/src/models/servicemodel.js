const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient()

// Lấy tất cả dịch vụ kèm bác sĩ
const getAllDichvuWithDoctors = async () => {
  return await prisma.dichvu.findMany({
    include: {
      doctors: {
        where: { role: 'bacsi' },
        select: { id: true, name: true, email: true, avatar: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
};

// Lấy tất cả dịch vụ
const getAllDichvus = async () => {
  return await prisma.dichvu.findMany({
    orderBy: { createdAt: 'desc' },
  });
};

// Lấy dịch vụ theo ID
const getDichvuById = async (id) => {
  return await prisma.dichvu.findUnique({
    where: { id: parseInt(id) },
    include: {
      doctors: {
        where: { role: 'bacsi' },
        select: { id: true, name: true, email: true, avatar: true },
      },
    },
  });
};

// Tạo dịch vụ mới
const createDichvu = async (dichvuData) => {
  return await prisma.dichvu.create({
    data: {
      title: dichvuData.title,
      desc: dichvuData.desc,
      price: parseInt(dichvuData.price),
      image: dichvuData.image,
    },
  });
};

// Cập nhật dịch vụ
const updateDichvu = async (id, dichvuData) => {
  return await prisma.dichvu.update({
    where: { id: parseInt(id) },
    data: {
      title: dichvuData.title,
      desc: dichvuData.desc,
      price: parseInt(dichvuData.price),
      image: dichvuData.image,
    },
  });
};

// Xóa dịch vụ
const deleteDichvu = async (id) => {
  return await prisma.dichvu.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  getAllDichvuWithDoctors,
  getAllDichvus,
  getDichvuById,
  createDichvu,
  updateDichvu,
  deleteDichvu,
};