import express from "express";
import {
  addUser,
  changeUserPassword,
  checkUser,
  getUser,
} from "../controller/userController.js";
const router = express.Router();

router.get("/user/:id", getUser);

router.post("/createuser", addUser);
router.post("/checkuser", checkUser);
router.put("/changepassword", changeUserPassword);
export default router;
