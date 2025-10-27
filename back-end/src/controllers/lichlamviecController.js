const workScheduleModel = require("../models/lichlamviecModel");

exports.list = async (req, res) => {
  try {
    const data = await workScheduleModel.getAllWorkSchedules();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "List failed", detail: String(e) });
  }
};

exports.create = async (req, res) => {
  try {
    const { date, startTime, endTime, room, status, doctorId } = req.body;
    if (!date || !startTime || !endTime || !room) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const created = await workScheduleModel.createWorkSchedule({
      date: new Date(date),
      startTime,
      endTime,
      room,
      status: status || "Đang chờ xác nhận",
      doctorId: doctorId ?? null,
    });
    res.status(201).json(created);
  } catch (e) {
    res.status(500).json({ error: "Create failed", detail: String(e) });
  }
};

exports.update = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { date, startTime, endTime, room, status } = req.body;
    const updated = await workScheduleModel.updateWorkSchedule(id, {
      ...(date ? { date: new Date(date) } : {}),
      ...(startTime ? { startTime } : {}),
      ...(endTime ? { endTime } : {}),
      ...(room ? { room } : {}),
      ...(status ? { status } : {}),
    });
    res.json(updated);
  } catch (e) {
    res.status(500).json({ error: "Update failed", detail: String(e) });
  }
};

exports.remove = async (req, res) => {
  try {
    const id = Number(req.params.id);
    await workScheduleModel.deleteWorkSchedule(id);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: "Delete failed", detail: String(e) });
  }
};
