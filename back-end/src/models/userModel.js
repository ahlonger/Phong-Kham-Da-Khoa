// src/models/userModel.js
const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

// Chỉ nhận các field hợp lệ, ép kiểu dichvuId
const createUser = async (data) => {
  const payload = {
    name: data.name,
    email: data.email,
    password: data.password ?? null,
    avatar: data.avatar ?? null,
    role: data.role,
    dichvuId: data.dichvuId ? Number(data.dichvuId) : undefined,

    // mới:
    chuyenmon: data.chuyenmon ?? null,
    namkinhnghiem: data.namkinhnghiem ? Number(data.namkinhnghiem) : null,
    gioithieu: data.gioithieu ?? null,
    thanhtuu: data.thanhtuu ?? null,

    phone: data.phone ?? null,
    address: data.address ?? null,
    gioitinh: data.gioitinh ?? null,
  };

  return prisma.user.create({ data: payload });
};

const findUserByEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

const findUsers = async (role) =>
  prisma.user.findMany({
    where: role ? { role } : undefined,
    select: {
      id: true, name: true, email: true, role: true, avatar: true,
       chuyenmon: true, namkinhnghiem: true, gioithieu: true, thanhtuu: true,dichvuId: true,
      dichvu: { select: {id: true, title: true } },
    },
    orderBy: { id: 'desc' },
  });

 
// ✅ cập nhật từng user theo id
const updateUser = async (id, data) => {
  const payload = {
    // chỉ pick các field cho phép update
    name: data.name,
    password: data.password ?? undefined,
    avatar: data.avatar ?? undefined,
    role: data.role,
    dichvuId: data.dichvuId,
    chuyenmon: data.chuyenmon,
    namkinhnghiem: data.namkinhnghiem,
    gioithieu: data.gioithieu,
    thanhtuu: data.thanhtuu,
    chucvu: data.chucvu,

    phone: data.phone,
    address: data.address,
    gioitinh: data.gioitinh,
  };

  // loại bỏ key undefined (tránh set null ngoài ý muốn)
  Object.keys(payload).forEach(k => payload[k] === undefined && delete payload[k]);

  return prisma.user.update({
    where: { id: Number(id) },
    data: payload,
  });
};

 async function setResetTokenByEmail(email, token, expireAt) {
  return prisma.user.update({
    where: { email },
    data: { resetToken: token, resetExpire: expireAt },
  });
}

async function findByValidResetToken(token, now = new Date()) {
  return prisma.user.findFirst({
    where: {
      resetToken: token,
      resetExpire: { gt: now }, // còn hạn
    },
  });
}
async function updatePasswordById(id, hashedPassword) {
  return prisma.user.update({
    where: { id: Number(id) },
    data: { password: hashedPassword },
  });
}
async function clearResetToken(id) {
  return prisma.user.update({
    where: { id: Number(id) },
    data: { resetToken: null, resetExpire: null },
  });
}
module.exports = { 
  createUser, 
  findUserByEmail,
  findUsers,
  updateUser, 
  setResetTokenByEmail,
  findByValidResetToken,
  updatePasswordById,
  clearResetToken,};
