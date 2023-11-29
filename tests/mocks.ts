import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { getRandomDateInRangePreviousToNextMonth } from "./helpers";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
} from "unique-names-generator";

// TODO: Move to an interfaces file
export interface ICalendarEvent {
  id: string;
  date: Date;
  timeOfDay: string;
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

/**
 * Creates a calendar event with random data.
 *
 * @returns {ICalendarEvent} The generated calendar event.
 */
const createCalenderEvent = (): ICalendarEvent => {
  // Config for creating pseudo-unique adjectives
  const config: Config = {
    dictionaries: [adjectives],
  };

  // New pseudo-unique adjective
  const randomAdjective: string = uniqueNamesGenerator(config);

  return {
    id: uuid(),
    date: getRandomDateInRangePreviousToNextMonth(),
    timeOfDay: getRandomDateInRangePreviousToNextMonth().toLocaleTimeString(),
    title:
      randomAdjective.charAt(0).toUpperCase() +
      randomAdjective.slice(1) +
      " Event",
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
): ICalendarEvent[] => {
  const calendarEvents: ICalendarEvent[] = [];

  for (let i = 0; i < numOfEventsMocks; i++) {
    calendarEvents.push(createCalenderEvent());
  }

  return calendarEvents;
};
