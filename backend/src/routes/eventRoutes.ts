import { Router } from "express";
import { createEvent, getEvents } from "../controllers/eventControllers";

const routes: Router = Router();

routes.get("/", getEvents);
routes.post("/", createEvent);

export default routes;
