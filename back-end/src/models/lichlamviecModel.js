// src/models/workScheduleModel.js
const { PrismaClient } = require("../generated/client");
const prisma = new PrismaClient();

const getAllWorkSchedules = () => {
  return prisma.workSchedule.findMany({
    orderBy: { createdAt: "desc" },
    include: { doctor: true },
  });
};

const createWorkSchedule = (data) => prisma.workSchedule.create({ data });

const updateWorkSchedule = (id, data) =>
  prisma.workSchedule.update({ where: { id: Number(id) }, data });

const deleteWorkSchedule = (id) =>
  prisma.workSchedule.delete({ where: { id: Number(id) } });

module.exports = {
  getAllWorkSchedules,
  createWorkSchedule,
  updateWorkSchedule,
  deleteWorkSchedule,
};
