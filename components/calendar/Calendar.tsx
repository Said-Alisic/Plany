import { Alert, View } from "react-native";
import CalendarPicker, {
  DateChangedCallback,
} from "react-native-calendar-picker";
import { useEffect, useRef, useState } from "react";
import { styles } from "../../styles/styles";
import moment, { Moment } from "moment";
import SelectDropdown from "react-native-select-dropdown";
import EventInfo from "./EventInfo";
import { Divider, Text } from "react-native-paper";
import { ICalendarEvent } from "../../common/interfaces";
import axios from "axios";
import { PlanyApiEndpoints } from "../../common/enums";

export default function Calendar() {
  const selectDropdownRef = useRef<SelectDropdown>(null);
  const [selectedEvent, setSelectedEvent] = useState<ICalendarEvent | null>(
    null
  );
  const [selectedEvents, setSelectedEvents] = useState<ICalendarEvent[]>([]);

  const handleDateChange: DateChangedCallback = async (date: Moment) => {
    const startDate: string = date
      ? moment(date).format("YYYY-MM-DD").toString()
      : "";

    selectDropdownRef.current?.reset();

    // NOTE: Removes the selected event
    setSelectedEvent(null);

    await axios
      .get(PlanyApiEndpoints.CALENDAR_EVENTS, {
        params: { date: startDate },
      })
      .then((response) => {
        const selectedDateEvents: ICalendarEvent[] = response.data.filter(
          (item: ICalendarEvent) =>
            moment(item.dateAndTime).format("YYYY-MM-DD") === startDate
        );

        setSelectedEvents(selectedDateEvents);
      })
      .catch((error) => {
        setSelectedEvents([]);

        console.error(
          `An error occurred at${PlanyApiEndpoints.CALENDAR_EVENTS}?date=${date}`,
          error.message
        );
      });
  };

  return (
    <View style={styles.calendarContainer}>
      <CalendarPicker
        todayBackgroundColor="#f7d7e1"
        todayTextStyle={{ color: "#000000" }}
        selectedDayTextStyle={{
          color: "#000000",
          fontWeight: "300",
        }}
        selectedDayStyle={{ backgroundColor: "#9fb5cc" }}
        textStyle={{ color: "#000000" }}
        onDateChange={handleDateChange}
        nextTitleStyle={{
          fontWeight: "bold",
          fontSize: 15,
        }}
        previousTitleStyle={{
          fontWeight: "bold",
          fontSize: 15,
        }}
        monthTitleStyle={{ fontWeight: "bold", fontSize: 25 }}
        yearTitleStyle={{ fontWeight: "bold", fontSize: 25 }}
      />
      <Divider style={styles.dividerMargin} />
      <View style={styles.eventSelectInputContainer}>
        <Text style={styles.dateText}>
          Events Found: {selectedEvents.length || "No events found"}
        </Text>
        <SelectDropdown
          buttonStyle={{
            backgroundColor: "#9fb5cc",
            borderRadius: 10,
            opacity: selectedEvents.length < 1 ? 0.5 : 1,
          }}
          dropdownStyle={{
            borderRadius: 10,
          }}
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
    </View>
  );
}
