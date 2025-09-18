import express from "express";
import {
  getUser,
  signin,
  signout,
  signup,
  updateProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/me", getUser);
router.put("/updateProfile", updateProfile);

export default router;
