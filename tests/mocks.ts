import * as uuid from "uuid";
import { getRandomDateInRangePreviousToNextMonth } from "./helpers";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
} from "unique-names-generator";

// TODO: Move to an interfaces file
interface CalendarEvent {
  id: string;
  timeOfDay: Date;
  title: string;
  participants: string[]; // TODO: Create a new interface for participants with {id, name, email}
  location: string;
  status: EventStatus;
}

// TODO: Move to an enums file
enum EventStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

const createCalenderEvent = (): CalendarEvent => {
  // Config for creating pseudo-unique adjectives
  const config: Config = {
    dictionaries: [adjectives],
  };

  // New pseudo-unique adjective
  const randomAdjective: string = uniqueNamesGenerator(config);

  return {
    id: uuid.v4(),
    timeOfDay: getRandomDateInRangePreviousToNextMonth(),
    title: randomAdjective + " Event",
    participants: [
      (Math.floor(Math.random() * 100) + 1).toString(),
      (Math.floor(Math.random() * 100) + 1).toString(),
      (Math.floor(Math.random() * 100) + 1).toString(),
    ],
    location: randomAdjective + " Location",
    status: EventStatus.ACTIVE,
  };
};

export const mockCalendarEvents = (
  numOfEventsMocks: number
): CalendarEvent[] => {
  const calendarEvents: CalendarEvent[] = [];

  for (let i = 0; i < numOfEventsMocks; i++) {
    calendarEvents.push(createCalenderEvent());
  }

  return calendarEvents;
};
