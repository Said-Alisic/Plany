import { View } from "react-native";
import CalendarPicker, {
  DateChangedCallback,
} from "react-native-calendar-picker";
import { useRef, useState } from "react";
import moment, { Moment } from "moment";
import SelectDropdown from "react-native-select-dropdown";
import EventInfo from "./EventInfo";
import { Divider, Text } from "react-native-paper";
import axios from "axios";
import { PlanyApiEndpoints } from "../../../common/enums";
import { ICalendarEvent } from "../../../common/interfaces";
import { styles } from "../../../styles/styles";
import { calendarPickerStyles } from "../../../styles/calendar-picker-styles";
import {
  selectDropdownButtonStyle,
  selectDropdownStyles,
} from "../../../styles/select-dropdown-styles";

export default function Calendar(): JSX.Element {
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
        onDateChange={handleDateChange}
        todayBackgroundColor={calendarPickerStyles.todayBackgroundColor.color}
        todayTextStyle={calendarPickerStyles.todayTextStyle}
        selectedDayTextStyle={calendarPickerStyles.selectedDayTextStyle}
        selectedDayStyle={calendarPickerStyles.selectedDayStyle}
        textStyle={calendarPickerStyles.textStyle}
        nextTitleStyle={calendarPickerStyles.nextTitleStyle}
        previousTitleStyle={calendarPickerStyles.previousTitleStyle}
        monthTitleStyle={calendarPickerStyles.monthTitleStyle}
        yearTitleStyle={calendarPickerStyles.yearTitleStyle}
      />
      <Divider style={styles.dividerMargin} />
      <View style={styles.eventSelectInputContainer}>
        <Text style={styles.dateText}>
          Events Found: {selectedEvents.length || "No events found"}
        </Text>
        <SelectDropdown
          buttonStyle={selectDropdownButtonStyle(selectedEvents).buttonStyle}
          dropdownStyle={selectDropdownStyles.dropdownStyle}
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
