import express from "express";
import cors from "cors";
import morgan from "morgan";
import eventRoutes from "./routes/eventRoutes";
import ticketRoutes from "./routes/ticketRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/ticket", eventRoutes);
app.use("/ticket", ticketRoutes);

export default app;
