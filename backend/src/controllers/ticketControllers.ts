import { Request, Response } from "express";
import {
  cancelTicketService,
  createTicketService,
  getTicketsService,
} from "../services/ticketServices";

export const getTickets = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const tickets = await getTicketsService(id);
    res.status(200).json(tickets);
  } catch (err) {
    res.status(400).json({ message: "Error obtaining booking history" });
  }
};
export const createTicket = async (req: Request, res: Response) => {
  try {
    const { userId, eventId } = req.body;
    const newTicket = await createTicketService({ userId, eventId });
    res.status(200).json(newTicket);
  } catch (err: any) {
    if (err.message.includes("exist")) {
      res.status(404).json({ message: err.message });
    } else if (err.message.includes("seats")) {
      res.status(409).json({ message: err.message });
    }
  }
};
export const cancelTicket = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await cancelTicketService(id);
    res.status(200).json({ message: "Ticket deleted correctly" });
  } catch (err: any) {
    if (err.message.includes("exist")) {
      res.status(404).json({ message: err.message });
    } else if (err.message.includes("passed")) {
      res.status(400).json({ message: err.message });
    }
  }
};
