import { Router } from "express";
import { RegisterUser } from "../controllers/user.controllers.js";
const router = Router();

router.route("/register").get(RegisterUser);

export default router;
