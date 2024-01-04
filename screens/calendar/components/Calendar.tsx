import { ScrollView, View } from "react-native";
import CalendarPicker, {
  DateChangedCallback,
} from "react-native-calendar-picker";
import { useState } from "react";
import moment, { Moment } from "moment";
import { Divider, List, Text, Icon } from "react-native-paper";
import IonIcon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { PlanyApiEndpoints } from "../../../common/enums";
import { ICalendarEvent } from "../../../common/interfaces";
import { styles } from "../../../styles/styles";
import { calendarPickerStyles } from "../../../styles/calendar-picker-styles";
import { calendarEventsListStyles } from "../../../styles/calendar-events-list-styles";

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
    <View style={styles.calendarContainer}>
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
      {/* TODO: #9 -> Create separate component */}
      <Text style={[styles.mt25, styles.selectedDateText]}>
        {selectedDate.date() === moment().date()
          ? selectedDate.format("ddd D MMM") + " - Today"
          : selectedDate.format("ddd D MMM")}
      </Text>
      <Divider style={styles.dividerMargin} />

      {/* TODO: #9 -> list events or show EMPTY text */}
      {/* TODO: #9 -> Separate list components into atoms or molecules */}

      <View style={calendarEventsListStyles.eventsContainer}>
        <View style={styles.inlineItems}>
          <IonIcon name="calendar-sharp" size={30} style={[styles.mt10]} />
          <Text variant="titleLarge" style={[styles.ml10, styles.mt10]}>
            Events
          </Text>
        </View>
        {calendarEvents.length > 0 ? (
          <ScrollView>
            <List.Section style={styles.ml10}>
              {calendarEvents.map((event, index) => {
                return (
                  <View key={index} style={styles.mb10}>
                    <List.Item
                      title={event.title}
                      left={() => (
                        <View style={styles.inlineItems}>
                          <Icon source="clock-time-four-outline" size={20} />
                          <Text style={styles.ml10}>
                            {moment(event.dateAndTime)
                              .format("HH:mm")
                              .toString()}
                          </Text>
                        </View>
                      )}
                    />
                  </View>
                );
              })}
            </List.Section>
          </ScrollView>
        ) : (
          <Text
            variant="bodyLarge"
            style={[
              styles.mt25,
              styles.ml10,
              calendarEventsListStyles.emptyEventsText,
            ]}
          >
            No events found
          </Text>
        )}
      </View>
    </View>
  );
}
