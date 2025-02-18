const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendorName: { type: String, required: true },
  vendorMail: { type: String, required: true, unique: true },
  vendorPassword: { type: String, required: true },
  businessName: { type: String, required: true }, 
  gstNumber: { type: String, required: true },
  regCertificate: { type: String, required: true }, 
  panCard: { type: String, required: true }, 
  isAllow: { type: Boolean, default: false },
});

const Vendor = mongoose.model("Vendor", vendorSchema);
module.exports = Vendor;
