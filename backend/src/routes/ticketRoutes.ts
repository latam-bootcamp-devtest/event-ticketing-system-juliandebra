import { Router } from "express";
import {
  cancelTicket,
  createTicket,
  getTickets,
} from "../controllers/ticketControllers";

const routes: Router = Router();

routes.get("/users/:id/tickets", getTickets);
routes.post("/ticket", createTicket);
routes.delete("/ticket/:id", cancelTicket);

export default routes;
