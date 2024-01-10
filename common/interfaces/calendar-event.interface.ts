import { CalendarEventStatus } from "../enums";
import { IUser } from "./";
import { IBase } from "./";

export interface ICalendarEvent extends IBase {
  dateAndTime: string;
  title: string;
  location: string;
  status: CalendarEventStatus;
  participants?: IUser[];
  description?: string;
}
