import { CalendarEventStatus } from "../enums";
import { IParticipant } from "./";

export interface ICalendarEvent {
  id: string;
  date: Date;
  title: string;
  location: string;
  status: CalendarEventStatus;
  participants?: IParticipant[];
}
