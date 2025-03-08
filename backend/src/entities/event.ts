import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Ticket from "./ticket";

@Entity({ name: "events" })
class Event {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  date!: string;

  @Column()
  availableSeats!: number;

  @OneToMany(() => Ticket, (ticket) => ticket.eventId)
  ticket!: Ticket;
}
export default Event;
