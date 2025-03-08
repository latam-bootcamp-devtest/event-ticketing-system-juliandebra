import { Request, Response } from "express";
import {
  createEventService,
  getEventsService,
} from "../services/eventServices";

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await getEventsService;
    res.status(200).json(events);
  } catch (err) {
    res.status(404).json({ message: "Error obtaining events" });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const newEvent = await createEventService();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: "Error creating event" });
  }
};
