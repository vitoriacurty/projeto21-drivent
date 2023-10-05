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

async function createBooking(roomId: number, userId: number) {
    return prisma.booking.create({
      data: {
        userId,
        roomId,
        updatedAt: new Date(),
      },
    });
  }
  
  async function findRoomId(roomId: number) {
    return prisma.room.findFirst({
      where: {
        id: roomId,
      },
    });
  }
  
  async function findBookingByRoomId(roomId: number) {
    return prisma.booking.findFirst({
      where: {
        roomId,
      },
    });
  }


export const bookingRepository = {
    getBooking, createBooking, findRoomId, findBookingByRoomId
};