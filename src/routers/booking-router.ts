import { createBooking, getBooking, updateBooking } from "@/controllers/booking-controller";
import { authenticateToken, validateBody } from "@/middlewares";
import { bookingSchema } from "@/schemas/booking-schemas";
import { Router } from "express";

const bookingRouter = Router()

bookingRouter.get("/", authenticateToken, getBooking)
bookingRouter.post("/", authenticateToken, validateBody(bookingSchema), createBooking)
bookingRouter.put("/:bookingId", authenticateToken, updateBooking)

export { bookingRouter }