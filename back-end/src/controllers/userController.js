const userModel = require('../models/userModel');
const validateUser = require('../validation/userValidation');
const multer = require('multer');
const path = require('path'); 
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
// Tạo một người dùng mới 

// Thiết lập Multer để xử lý tệp hình ảnh
const storage = multer.diskStorage({
 destination: (req, file, cb) => {
   cb(null, 'public/uploads/user'); // Thư mục lưu trữ tệp hình ảnh (phải tạo sẵn)
 },
 filename: (req, file, cb) => {
   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
   cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
 },
});

// const upload = multer({ storage });
const upload = multer({ storage }).single('avatar');


const createUser = async (req, res) => {
 const data = req.body;
 //xử lý ảnh
 const avatarFile = req.file;
 const errors = validateUser(data, avatarFile);

 if (Object.keys(errors).length > 0) {
   return res.status(400).json(errors);
 }

  data.avatar = req.file ? req.file.path : ''; // Đường dẫn tới tệp hình ảnh (nếu có)
 const user = await userModel.createUser(data);
 res.json(user)
}

// Đăng nhập người dùng
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Email hoặc mật khẩu không đúng" });
    }

    const dbPass = user.password || "";
    let ok = false;

    if (dbPass.startsWith("$2")) {
      // đã hash bcrypt
      ok = await bcrypt.compare(password, dbPass);
    } else {
      // tài khoản cũ lưu plaintext -> tạm chấp nhận nếu khớp
      ok = dbPass === password;
      // và nâng cấp: auto-hash để lần sau dùng bcrypt
      if (ok && password) {
        const hashed = await bcrypt.hash(password, 10);
        if (userModel.updatePasswordById) {
          await userModel.updatePasswordById(user.id, hashed);
        } else {
          await userModel.updateUser(user.id, { password: hashed });
        }
      }
    }

    if (!ok) {
      return res.status(401).json({ message: "Email hoặc mật khẩu không đúng" });
    }

    await userModel.updateUser(user.id, { status: "Đang hoạt động" });
    //  Lấy lại user mới nhất để trả cho FE
    const refreshedUser = await userModel.findUserById(user.id);

    // Không trả password/token reset về FE
    const { password: _pw, resetToken, resetExpire, ...safeUser } = refreshedUser;
    return res.json({ message: "Đăng nhập thành công", user: safeUser });
  } catch (e) {
    console.error("POST /api/login error:", e);
    return res.status(500).json({ message: "Server error" });
  }
};

const logoutUser = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("📥 Logout ID nhận được:", id);
    const updated = await userModel.updateUser(id, { status: "Không hoạt động" });
    console.log("✅ Đã cập nhật status:", updated.status);
    res.json({ message: "Đã đăng xuất thành công" });
  } catch (err) {
    console.error("POST /logout error:", err);
    res.status(500).json({ message: "Server error" });
  }
};



const listUsers = async (req, res) => {
  try {
    const { role } = req.query; // ví dụ: 'bacsi' | 'admin' | 'user' | 'benhnhan'
    const users = await userModel.findUsers(role);
    res.json(users);            // trả mảng thẳng cho FE
  } catch (e) {
    console.error('GET /api/user error:', e);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ cập nhật user theo id
const updateUser = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = req.body;

    if (req.file) {
      data.avatar = `uploads/user/${req.file.filename}`;
    }

    if (data.dichvuId !== undefined) data.dichvuId = Number(data.dichvuId);
    if (data.namkinhnghiem !== undefined) data.namkinhnghiem = Number(data.namkinhnghiem);

    // 🔐 hash nếu có đổi mật khẩu
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    // 🟢 THÊM
    Object.keys(data).forEach((key) => {
      if (data[key] === "" || data[key] === null || data[key] === undefined) {
        delete data[key];
      }
    });

    const updated = await userModel.updateUser(id, data);
    res.json(updated);
  } catch (e) {
    console.error("PATCH /api/user/:id error:", e);
    res.status(500).json({ message: "Server error" });
  }
};


// Quên mật khẩu
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findUserByEmail(email);
    if (!user) return res.status(404).json({ message: 'Email không tồn tại' });

    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetExpire = new Date(Date.now() + 15 * 60 * 1000); // 15 phút

    await userModel.setResetTokenByEmail(email, resetToken, resetExpire);

    // TODO: gửi email thực tế. Tạm trả về link để bạn test FE:
    const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;
    return res.json({ message: 'Đã tạo link đặt lại mật khẩu!', resetUrl,token: resetToken, });
  } catch (err) {
    console.error('forgotPassword error:', err);
    return res.status(500).json({ message: 'Có lỗi xảy ra' });
  }
};


// Đặt lại mật khẩu
const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await userModel.findByValidResetToken(token, new Date());
    if (!user) return res.status(400).json({ message: 'Token không hợp lệ hoặc đã hết hạn' });

    const hashed = await bcrypt.hash(password, 10);
    await userModel.updatePasswordById(user.id, hashed);
    await userModel.clearResetToken(user.id);

    return res.json({ message: 'Đặt lại mật khẩu thành công!' });
  } catch (err) {
    console.error('resetPassword error:', err);
    return res.status(500).json({ message: 'Có lỗi xảy ra' });
  }
};

// 🟢 Lấy thông tin chi tiết user theo id
const getUserById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await userModel.findUserById(id);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy user" });
    }
    res.json(user);
  } catch (err) {
    console.error("GET /api/user/:id error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// 🗑️ Xóa người dùng theo ID
// 🗑️ Xóa người dùng theo ID (có kiểm tra)
const deleteUser = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await userModel.findUserById(id);

    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }

    //  Không cho xóa nếu tài khoản đang hoạt động
    if (user.status === "Đang hoạt động") {
      return res.status(400).json({
        message: "Không thể xóa tài khoản đang hoạt động. Hãy khóa tài khoản trước.",
      });
    }

    //  Không cho xóa admin chính
    if (user.role === "admin") {
      return res.status(403).json({ message: "Không thể xóa tài khoản quản trị viên!" });
    }

    await userModel.deleteUser(id);
    res.json({ message: `✅ Đã xóa tài khoản ${user.name || `ID ${id}`} thành công!` });
  } catch (err) {
    console.error("DELETE /api/user/:id error:", err);
    res.status(500).json({ message: "Lỗi server khi xóa người dùng" });
  }
};


module.exports = {
 createUser,
 loginUser,
 listUsers,
 upload,
 updateUser,
 forgotPassword,
 resetPassword,
 getUserById,
 deleteUser,
 logoutUser
}
