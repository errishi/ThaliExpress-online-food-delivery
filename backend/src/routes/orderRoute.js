import express from "express";
import { placeOrder, userOrders, verifyOrder } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";
import authOrdersMiddleware from "../middleware/authOrderMiddleware.js";
const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/user-orders", authOrdersMiddleware, userOrders);

export default orderRouter;