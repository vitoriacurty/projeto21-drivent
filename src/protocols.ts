import { Payment, Ticket, TicketStatus } from '@prisma/client';

export type ApplicationError = {
  name: string;
  message: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type ViaCEPAddressError = {
  error: boolean;
};

export type AddressEnrollment = {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export type CEP = {
  cep: string;
};

export type CreateTicketParams = Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>;

export type InputTicketBody = {
  ticketTypeId: number;
};

export type CardPaymentParams = {
  issuer: string;
  number: string;
  name: string;
  expirationDate: string;
  cvv: string;
};

export type InputPaymentBody = {
  ticketId: number;
  cardData: CardPaymentParams;
};

export type InputBookingBody = {
  roomId: number;
}

export type TicketTypeTicket = {
  id: number;
  ticketTypeId: number;
  enrollmentId: number;
  status: TicketStatus;
  TicketType: {
    id: number;
    name: string;
    price: number;
    isRemote: boolean;
    includesHotel: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
};
export type PaymentParams = Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>;
