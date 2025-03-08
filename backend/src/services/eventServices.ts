import { MoreThan } from "typeorm";
import { eventModel } from "../config/datasource";
import { EventDto } from "../dtos/EventDto";
import Event from "../entities/event";

export const getEventsService = async (
  pageSize: number,
  page: number
): Promise<Event[]> => {
  // const events = await eventModel.findAndCount({
  //   where: { date: MoreThan(String(new Date())) },
  //   order: { date: "ASC" },
  //   skip: (page - 1) * pageSize,
  //   take: pageSize,
  // });
  // console.log(events);
  // return {
  //   currentPage: page,
  //   pageSize: pageSize,
  //   events: events,
  // };
  const events = await eventModel.find();
  return events;
};

export const getEventService = async (id: number): Promise<Event> => {
  const event = await eventModel.findOneBy({ id });
  if (!event) throw new Error("Event doesn't exists");

  return event;
};

export const createEventService = async (
  eventData: EventDto
): Promise<Event> => {
  const newEvent = eventModel.create(eventData);
  const eventCreated = eventModel.save(newEvent);
  return eventCreated;
};
