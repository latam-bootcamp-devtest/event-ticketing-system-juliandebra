import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Event from "./event";

@Entity({ name: "tickets" })
class Ticket {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @ManyToOne(() => Event, (event) => event.ticket)
  eventId!: number;
}
export default Ticket;
