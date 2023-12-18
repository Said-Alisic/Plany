import { View, Text } from "react-native";
import CalendarPicker, {
  DateChangedCallback,
} from "react-native-calendar-picker";
import { ICalendarEvent, mockCalendarEvents } from "../../tests/mocks";
import { useEffect, useRef, useState } from "react";
import { styles } from "../../styles/styles";
import moment, { Moment } from "moment";
import SelectDropdown from "react-native-select-dropdown";
import EventInfo from "./EventInfo";

export default function Calendar() {
  const selectDropdownRef = useRef<SelectDropdown>(null);

  const [selectedEvent, setSelectedEvent] = useState<ICalendarEvent | null>(
    null
  );

  const [selectedEvents, setSelectedEvents] = useState<ICalendarEvent[]>([]);

  const [events, setEvents] = useState<ICalendarEvent[]>([]);

  const handleDateChange: DateChangedCallback = (date: Moment) => {
    const selectedDate = date; // Use the new date if available, or fallback to the previous date
    const startDate: string = selectedDate
      ? moment(selectedDate).format("YYYY-MM-DD").toString()
      : "";

    const selectedDateEvents: ICalendarEvent[] = events.filter(
      (event) => moment(event.date).format("YYYY-MM-DD") === startDate
    );

    selectDropdownRef.current?.reset();

    // NOTE: Removes the selected event
    setSelectedEvent(null);

    if (selectedDateEvents.length > 0) {
      setSelectedEvents(selectedDateEvents);
    } else {
      setSelectedEvents([]);
    }
  };

  useEffect(() => {
    // Initialize events only once when the component mounts
    setEvents(mockCalendarEvents(200));
  }, []);

  return (
    <View style={styles.calendarContainer}>
      <CalendarPicker onDateChange={handleDateChange} />
      <Text style={styles.dateText}>
        Events Found: {selectedEvents.length || "No events found"}
      </Text>
      <SelectDropdown
        ref={selectDropdownRef}
        disabled={selectedEvents.length < 1}
        data={selectedEvents}
        onSelect={(event) => {
          setSelectedEvent(event);
        }}
        buttonTextAfterSelection={(event) => {
          return event.title;
        }}
        rowTextForSelection={(event) => {
          return event.title;
        }}
      />
      {selectedEvent && selectedEvents.length > 0 ? (
        <EventInfo event={selectedEvent} />
      ) : null}
    </View>
  );
}
