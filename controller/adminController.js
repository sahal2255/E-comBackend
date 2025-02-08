const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/jwtUtils");

const adminLogin = async (req, res) => {
  const { data } = req.body;
  try {
    const { email, password } = data;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      console.log("admin not found");
      return res.status(404).json({ message: "Admin Not Found" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      console.log("password is not matched");
      return res.status(401).json({ message: "Invalid Credential" });
    }

    console.log("Admin Logged In succes");
    const accesstoken = generateAccessToken(admin);
    const refreshtoken = generateRefreshToken(admin);
    res.cookie("refreshToken", refreshtoken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.cookie("accessToken", accesstoken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.status(200).json({
      message: "Admin Logged In Successfully",
      success: true,
      user: { id: admin._id, role: admin.role, email: admin.email },
    });
  } catch (error) {
    console.log("error in admin login section", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  adminLogin,
};
