import { createBooking, getBooking, updateBooking } from "@/controllers/booking-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const bookingRouter = Router()

bookingRouter.get("/", authenticateToken, getBooking)
bookingRouter.post("/", authenticateToken, createBooking)
bookingRouter.put("/:bookingId", authenticateToken, updateBooking)

export { bookingRouter }