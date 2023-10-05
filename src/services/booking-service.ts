import { forbiddenError, notFoundError } from "@/errors";
import { enrollmentRepository, ticketsRepository } from "@/repositories";
import { bookingRepository } from "@/repositories/booking-repository";
import { TicketStatus } from "@prisma/client";


async function getBooking(userId: number) {
    const response = await bookingRepository.getBooking(userId);

    if (!response) throw notFoundError();

    const correctInfoBooking = {
        id: response.id,
        Room: response.Room,
    }

    return correctInfoBooking;
}

async function createBooking(roomId: number, userId: number) {
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollment) throw forbiddenError();

    const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);
    if (
        ticket.TicketType.isRemote === true ||
        ticket.TicketType.includesHotel === false ||
        ticket.status === TicketStatus.RESERVED
    )
        throw forbiddenError();

    const findRoomId = await bookingRepository.findRoomId(roomId);
    if (!findRoomId) throw notFoundError();

    const fullRoom = await bookingRepository.findBookingByRoomId(roomId);
    if (fullRoom) throw forbiddenError();

    const response = await bookingRepository.createBooking(roomId, userId);

    return { bookingId: response.id };
}

async function updateBooking(roomId: number, userId: number, bookingId: number) {
    const existingBooking = bookingRepository.getBooking(userId);
    if (!existingBooking) throw forbiddenError();

    const findRoomId = await bookingRepository.findRoomId(roomId);
    if (!findRoomId) throw notFoundError();

    const room = await bookingRepository.findBookingByRoomId(roomId);
    if (room) throw forbiddenError();

    const response = await bookingRepository.updateBooking(userId, roomId, bookingId);

    return { bookingId: response.id };
}


export const bookingService = { getBooking, createBooking, updateBooking }
