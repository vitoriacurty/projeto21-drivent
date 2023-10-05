import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import { bookingService } from '@/services/booking-service';
import { InputBookingBody } from '@/protocols';


export async function getBooking(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    try {
      const booking = await bookingService.getBooking(userId);
      return res.status(httpStatus.OK).send(booking);
    } catch (error) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export async function createBooking(req: AuthenticatedRequest, res: Response) {
    const { roomId } = req.body as InputBookingBody;
    const { userId } = req;
    try {
      const newBooking = await bookingService.createBooking(roomId, userId);
      return res.status(httpStatus.OK).send(newBooking);
    } catch (error) {
      if (error.name === 'NotFoundError') {
        return res.sendStatus(httpStatus.NOT_FOUND);
      }
      return res.sendStatus(httpStatus.FORBIDDEN);
    }
  }

export async function updateBooking() {

}
