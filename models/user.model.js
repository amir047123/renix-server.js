const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    img: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      required: [true, "password is required"],
    },

    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password"],
    },
    role: {
      type: String,
      enum: ["user", "admin", "doctor"],
      default: "user",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    fullName: {
      type: String,
      required: [true, "Please provide your Full Name"],
      trim: true,
    },
    forgetPasswordToken: {
      type: String,
      default: "",
    },
    number: {
      type: Number,
    },
    city: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    department: {
      type: String,
    },
    doctorType: {
      type: String,
    },
    doctorDegree: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
    macAddress: Array,
    deviceName: Array,
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
