import { prisma } from "@/config";

async function getBooking(userId: number) {
    return prisma.booking.findFirst({
        where: {
            userId,
        },
        include: {
            Room: true,
        },
    });
}


export const bookingRepository = {
    getBooking
};