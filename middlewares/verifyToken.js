const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/user.model");
module.exports = async (req, res, next) => {
  try {
    const token = req.headers?.authorization.split(" ")?.[1];
    if (!token) {
      return res
        .status(401)
        .json({ status: "fail", error: "Your are not logged in" });
    }
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.TOKEN_SECRET
    );
    next();
  } catch (error) {
    res.status(403).json({
      status: "fail",
      error: "Invalid token",
    });
  }
};
