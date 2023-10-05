import { notFoundError } from "@/errors";
import { bookingRepository } from "@/repositories/booking-repository";


async function getBooking(userId: number) {
    const response = await bookingRepository.getBooking(userId);

    if (!response) throw notFoundError();

    const correctInfoBooking = {
        id: response.id,
        Room: response.Room,
    }

    return correctInfoBooking;
}

async function createBooking() {

}

async function updateBooking() {

}

export const bookingService = { getBooking, createBooking, updateBooking }
