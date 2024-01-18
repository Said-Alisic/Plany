import { View } from "react-native";
import CalendarPicker, {
  DateChangedCallback,
} from "react-native-calendar-picker";
import { useState } from "react";
import moment, { Moment } from "moment";
import { Divider } from "react-native-paper";
import IonIcon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { PlanyApiEndpoints } from "../../../../common/enums";
import { ICalendarEvent } from "../../../../common/interfaces";
import { styles } from "../../../../styles/styles";
import { calendarPickerStyles } from "../../../../styles/calendar-styles/calendar-picker-styles";
import SelectedDateBox from "./SelectedDateBox";
import CalendarEventsSection from "./CalendarEventsSection";

export default function Calendar(): JSX.Element {
  // Set default date to be today
  const [selectedDate, setSelectedDate] = useState<Moment>(moment());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [calendarEvents, setCalendarEvents] = useState<ICalendarEvent[]>([]);

  // TODO: #9 -> Refactor method logic for better flow
  const handleDateChange: DateChangedCallback = async (date: Moment) => {
    if (date) {
      setSelectedDate(moment(date));
    }

    const startDate: string = date
      ? moment(date).format("YYYY-MM-DD").toString()
      : moment().format("YYYY-MM-DD").toString();

    await axios
      .get(PlanyApiEndpoints.CALENDAR_EVENTS, {
        params: { date: startDate },
      })
      .then((response) => {
        const selectedDateEvents: ICalendarEvent[] = response.data.filter(
          (item: ICalendarEvent) =>
            moment(item.dateAndTime).format("YYYY-MM-DD") === startDate
        );

        setCalendarEvents(selectedDateEvents);
      })
      .catch((error) => {
        setCalendarEvents([]);

        console.error(
          `An error occurred at ${PlanyApiEndpoints.CALENDAR_EVENTS}?date=${date}`,
          error.message
        );
      });
  };

  return (
    <View style={calendarPickerStyles.calendarContainer}>
      <CalendarPicker
        onDateChange={handleDateChange}
        todayBackgroundColor={calendarPickerStyles.todayBackgroundColor.color}
        todayTextStyle={calendarPickerStyles.todayTextStyle}
        selectedDayTextStyle={calendarPickerStyles.selectedDayTextStyle}
        selectedDayStyle={calendarPickerStyles.selectedDayStyle}
        textStyle={calendarPickerStyles.textStyle}
        monthTitleStyle={calendarPickerStyles.monthTitleStyle}
        yearTitleStyle={calendarPickerStyles.yearTitleStyle}
        headerWrapperStyle={calendarPickerStyles.headerWrapperStyle}
        dayLabelsWrapper={calendarPickerStyles.dayLabelsWrapper}
        nextComponent={<IonIcon name="chevron-forward-sharp" size={25} />}
        previousComponent={<IonIcon name="chevron-back-sharp" size={25} />}
      />
      <Divider style={styles.dividerMargin} />
      <SelectedDateBox selectedDate={selectedDate} />
      <CalendarEventsSection calendarEvents={calendarEvents} />
    </View>
  );
}
