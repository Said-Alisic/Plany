import { CalendarEventStatus } from "../enums";
import { IParticipant } from "./";

export interface ICalendarEvent {
  id: string;
  dateAndTime: string;
  title: string;
  location: string;
  status: CalendarEventStatus;
  participants?: IParticipant[];
}
