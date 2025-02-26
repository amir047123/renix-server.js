const User = require("../models/user.model");

exports.createSignUpService = async (data) => {
  let result = await User.create(data);
  return result;
};
exports.getUserService = async (page = 1, size = 10, filter) => {
  const query = {};

  if (filter) {
    query.$or = [
      { email: { $regex: filter, $options: "i" } },
      { role: { $regex: filter, $options: "i" } },
      { fullName: { $regex: filter, $options: "i" } },
    ];
  }

  const result = await User.find(query)
    .sort({ createdAt: -1 })
    .skip(page * size)
    .limit(size);

  const total = await User.countDocuments(query);
  return { result, total };
};

exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

exports.getUserByIdService = async (id) => {
  const result = await User.findOne({ _id: id });
  return result;
};
exports.getUserByEmailService = async (email) => {
  const result = await User.findOne({ email: email }).select("-password ");

  return result;
};
exports.deleteUserService = async (id) => {
  const result = await User.deleteOne({ _id: id });
  return result;
};
exports.updateUserService = async (id, data) => {
  const result = await User.updateOne({ _id: id }, data);
  return result;
};
exports.getUserPasswordService = async (id) => {
  const result = await User.findOne({ _id: id }).select("password");
  return result;
};
