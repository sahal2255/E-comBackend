const Vendor = require("../models/Vendor");

const vendorRegister = async (req, res) => {
  console.log("Hitting the vendor register component");

  try {
    if (!req.body || !req.files) {
      return res.status(400).json({ message: "Invalid request, missing data." });
    }

    console.log("Received Data:", req.body);
    console.log("Uploaded Files:", req.files);

    const { vendorName, email, password, businessName, gstNumber } = req.body;

    const businessRegFile = req.files["businessReg"] ? req.files["businessReg"][0].path : null;
    const panCardFile = req.files["panCard"] ? req.files["panCard"][0].path : null;

    if (!businessRegFile || !panCardFile) {
      return res.status(400).json({ message: "File upload failed." });
    }

    const vendor = new Vendor({
      vendorName,
      vendorMail: email,
      vendorPassword: password,
      businessName,
      gstNumber,
      regCertificate: businessRegFile,
      panCard: panCardFile,
    });

    await vendor.save();

    res.status(201).json({
      message: "Vendor registration successful",
      vendor,
      success: true,
    });
  } catch (error) {
    console.error("Error in the vendor register function:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = { vendorRegister };
