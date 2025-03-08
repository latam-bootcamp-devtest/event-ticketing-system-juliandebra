import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Event from "./event";

@Entity({ name: "tickets" })
class Ticket {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @ManyToOne(() => Event, (event) => event.ticket)
  event!: Event;
}
export default Ticket;
