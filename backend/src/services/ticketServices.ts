import { eventModel, ticketModel } from "../config/datasource";
import { TicketDto } from "../dtos/TicketDto";

export const getTicketsService = async (id: number) => {
  const tickets = await ticketModel.find({ where: { userId: id } });
  return tickets;
};

export const createTicketService = async (ticketData: TicketDto) => {
  const { userId, eventId } = ticketData;
  const newTicket = ticketModel.create({ userId, eventId });
  const createdTicket = await ticketModel.save(newTicket);
  const event = await eventModel.findOneBy({ id: ticketData.eventId });
  if (!event) throw new Error("Event doesn't exist");
  if (event.availableSeats == 0)
    throw new Error("No available seats for this event");
  event.availableSeats = event.availableSeats - 1;
  console.log(event);
  await eventModel.save(event);
  return createdTicket;
};

export const cancelTicketService = async (id: number) => {
  const deletedTicket = await ticketModel.findOneBy({ id });

  if (!deletedTicket) throw new Error("Ticket doesn't exist");
  const event = await eventModel.findOneBy({ id: deletedTicket.eventId });
  if (!event) throw new Error("Event doesn't exist");
  const dateEvent = new Date(event.date);
  if (dateEvent > new Date()) throw new Error("Event has already passed");

  event.availableSeats = event.availableSeats + 1;
  await eventModel.save(event);
  await ticketModel.remove(deletedTicket);
};
