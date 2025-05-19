import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getStreamToken } from "../controllers/chat.controller.js";

const router = express.Router();

// This token is needed for stream to able to authenticate the user. It is not jwt token
router.get("/token", protectRoute, getStreamToken);

export default router;