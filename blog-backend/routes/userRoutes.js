import express from "express";
import {
  addUser,
  changeUserPassword,
  checkUser,
  editUser,
  getUser,
  logout,
} from "../controller/userController.js";
const router = express.Router();

router.get("/user/:id", getUser);
router.get("/logout", logout);
router.post("/createuser", addUser);
router.post("/checkuser", checkUser);
router.put("/changepassword", changeUserPassword);
router.put("/updateuser", editUser);
export default router;
