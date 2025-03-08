import { Request, Response } from "express";
import {
  cancelTicketService,
  createTicketService,
  getTicketsService,
} from "../services/ticketServices";

export const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await getTicketsService();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(400).json({ message: "Error obtaining booking history" });
  }
};
export const createTicket = async (req: Request, res: Response) => {
  try {
    const newTicket = await createTicketService();
    res.status(200).json(newTicket);
  } catch (err) {
    res.status(400).json({ message: "Error creating ticket" });
  }
};
export const cancelTicket = async (req: Request, res: Response) => {
  try {
    await cancelTicketService();
    res.status(200).json({ message: "Ticket deleted correctly" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting ticket" });
  }
};
