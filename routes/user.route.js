const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getUsers);
router.post("/signup", userController.singUp);
router.patch("/verify", userController.verifyEmail);
router.post("/login", userController.logIn);
router.get("/me", userController.getMe);
router.post("/forgot-password", userController.forgotPassword);
router.route("/by-email").get(userController.getUserByQuery);
router.post("/delete-ip/:id", userController.deleteUserIp);
router.get("/get-user-ip", userController.getUserIp);
router.patch("/reset-password/:id", userController.resetPassword);
router.route("/specific").get(userController.getSpecificUser);

router
  .route("/:id")
  .get(userController.getUserById)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

module.exports = router;
