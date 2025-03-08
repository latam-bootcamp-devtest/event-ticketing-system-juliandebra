import { DataSource } from "typeorm";
import { DATABASE_PG, HOST, PASSWORD_PG, PORT_PG, USERNAME_PG } from "./envs";
import Ticket from "../entities/ticket";
import Event from "../entities/event";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: HOST,
  port: Number(PORT_PG),
  username: USERNAME_PG,
  password: PASSWORD_PG,
  database: DATABASE_PG,
  synchronize: true,
  logging: true,
  entities: [Ticket, Event],
  subscribers: [],
  migrations: [],
});
