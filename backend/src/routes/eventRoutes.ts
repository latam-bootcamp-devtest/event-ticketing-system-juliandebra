import { Router } from "express";
import {
  createEvent,
  getEvent,
  getEvents,
} from "../controllers/eventControllers";

const routes: Router = Router();

routes.get("/", getEvents);
routes.get("/:id", getEvent);
routes.post("/", createEvent);

export default routes;
