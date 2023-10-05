import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const bookingRouter = Router()

bookingRouter.get("/", authenticateToken)
bookingRouter.post("/", authenticateToken)
bookingRouter.put("/:bookingId", authenticateToken)

export { bookingRouter }