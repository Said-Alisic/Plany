import { View, Text } from "react-native";
import CalendarPicker, {
  DateChangedCallback,
} from "react-native-calendar-picker";
import SelectDropdown from "react-native-select-dropdown";
import { ICalendarEvent, mockCalendarEvents } from "../tests/mocks";
import { useEffect, useState } from "react";
import { styles } from "../styles/styles";
import moment, { Moment } from "moment";
import EventInfo from "./EventInfo";

export default function Calendar() {
  const [selectedStartDate, setSelectedStartDate] = useState<Moment | null>(
    null
  );

  const [selectedEvents, setSelectedEvents] = useState<ICalendarEvent[]>([]);

  const [events, setEvents] = useState<ICalendarEvent[]>([]);

  const handleDateChange: DateChangedCallback = (date: Moment) => {
    setSelectedStartDate((prevDate) => {
      const selectedDate = date || prevDate; // Use the new date if available, or fallback to the previous date
      const startDate: string = selectedDate
        ? moment(selectedDate).format("YYYY-MM-DD").toString()
        : "";

      const selectedDateEvents: ICalendarEvent[] = events.filter(
        (event) => moment(event.date).format("YYYY-MM-DD") === startDate
      );

      // NOTE: Removes the selected event
      // setSelectedEvent(null);

      if (selectedDateEvents.length > 0) {
        setSelectedEvents(selectedDateEvents);
      } else {
        setSelectedEvents([]);
      }

      console.log(selectedDateEvents);

      return selectedDate;
    });
  };

  useEffect(() => {
    // Initialize events only once when the component mounts
    setEvents(mockCalendarEvents(200));
  }, []);

  // TODO: Check if necessary anywhere when refactoring
  // const startDate: string = selectedStartDate
  //   ? moment(selectedStartDate).format("YYYY-MM-DD").toString()
  //   : "";

  return (
    <View style={styles.calendarContainer}>
      <CalendarPicker onDateChange={handleDateChange} />
      <Text style={styles.dateText}>
        Events Found: {selectedEvents.length || "No events found"}
      </Text>
      {/* <EventSelectInput/> */}
      {/* <SelectDropdown
        disabled={selectedEvents.length < 1}
        data={selectedEvents}
        onSelect={(selectedItem) => {
          setSelectedEvent(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem.title;
        }}
        rowTextForSelection={(item) => {
          return item.title;
        }}
      />
      {selectedEvent && selectedEvents.length > 0 ? (
        <EventInfo event={selectedEvent} />
      ) : null} */}
    </View>
  );
}
