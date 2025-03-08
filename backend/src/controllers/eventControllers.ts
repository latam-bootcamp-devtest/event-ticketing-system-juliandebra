import { Request, Response } from "express";
import {
  createEventService,
  getEventService,
  getEventsService,
} from "../services/eventServices";

export const getEvents = async (req: Request, res: Response) => {
  try {
    const pageSize = Number(req.query.pageSize);
    const page = Number(req.query.page);
    const events = await getEventsService(pageSize, page);
    res.status(200).json(events);
  } catch (err) {
    res.status(404).json({ message: "Error obtaining events" });
  }
};
export const getEvent = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const event = await getEventService(id);
    res.status(200).json(event);
  } catch (err) {
    res.status(404).json({ message: "Error obtaining events" });
  }
};
export const createEvent = async (req: Request, res: Response) => {
  try {
    const { name, date, availableSeats } = req.body;
    const newEvent = await createEventService({ name, date, availableSeats });
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: "Error creating event" });
  }
};
