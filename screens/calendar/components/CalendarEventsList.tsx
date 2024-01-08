import { View, ScrollView } from "react-native";
import React from "react";
import { Icon, List, Text } from "react-native-paper";
import { styles } from "../../../styles/styles";
import moment from "moment";
import { ICalendarEvent } from "../../../common/interfaces";
import { calendarEventsListStyles } from "../../../styles/calendar-styles/calendar-events-list-styles";

interface ICalendarEventsListProps {
  calendarEvents: ICalendarEvent[];
}

export default function CalendarEventsList(
  props: ICalendarEventsListProps,
): JSX.Element {
  const { calendarEvents } = props;

  return (
    <ScrollView style={[calendarEventsListStyles.eventsListContainer]}>
      <List.Section style={styles.ml10}>
        {calendarEvents.map((event, index) => {
          return (
            <List.Item
              key={index}
              style={styles.mb10}
              title={event.title}
              left={() => (
                <View style={styles.inlineItems}>
                  <Icon source="clock-time-four-outline" size={20} />
                  <Text style={styles.ml10}>
                    {moment(event.dateAndTime).format("HH:mm").toString()} s
                  </Text>
                </View>
              )}
            />
          );
        })}
      </List.Section>
    </ScrollView>
  );
}
