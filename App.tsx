import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import CalendarPicker, {
  DateChangedCallback,
} from "react-native-calendar-picker";
import moment, { Moment } from "moment";
import { styles } from "./styles/styles";
import { ICalendarEvent, mockCalendarEvents } from "./tests/mocks";
import SelectDropdown from "react-native-select-dropdown";

export default function App() {
  const [selectedStartDate, setSelectedStartDate] = useState<Moment | null>(
    null
  );

  const [events, setEvents] = useState<ICalendarEvent[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<ICalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<ICalendarEvent | null>(
    null
  );

  useEffect(() => {
    // Initialize events only once when the component mounts
    setEvents(mockCalendarEvents(200));
  }, []);

  const handleDateChange: DateChangedCallback = (date: Moment) => {
    setSelectedStartDate((prevDate) => {
      const selectedDate = date || prevDate; // Use the new date if available, or fallback to the previous date
      const startDate: string = selectedDate
        ? moment(selectedDate).format("YYYY-MM-DD").toString()
        : "";

      const selectedDateEvents: ICalendarEvent[] = events.filter(
        (event) => moment(event.date).format("YYYY-MM-DD") === startDate
      );

      setSelectedEvent(null);

      if (selectedDateEvents.length > 0) {
        setSelectedEvents(selectedDateEvents);
      } else {
        setSelectedEvents([]);
      }

      console.log(selectedDateEvents);

      return selectedDate;
    });
  };

  const startDate: string = selectedStartDate
    ? moment(selectedStartDate).format("YYYY-MM-DD").toString()
    : "";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Plany</Text>
        <Text style={styles.subText}>
          Mobile App for tracking events in a calendar
        </Text>
      </View>
      <View style={styles.calendarContainer}>
        <CalendarPicker onDateChange={handleDateChange} />
        <Text style={styles.dateText}>
          Events Found: {selectedEvents.length || "No events found"}
        </Text>
        <SelectDropdown
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
          <View style={styles.eventInfoContainer}>
            <Text>Event Title: {selectedEvent?.title}</Text>
            <Text>Event Date: {startDate}</Text>
            <Text>Event Time of Day: {selectedEvent?.timeOfDay}</Text>
            <Text>Event Location: {selectedEvent?.location}</Text>
            <Text>Event Status: {selectedEvent?.status}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}
