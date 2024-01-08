import { View } from "react-native";
import { ICalendarEvent } from "../../../common/interfaces";
import { Text } from "react-native-paper";
import IonIcon from "react-native-vector-icons/Ionicons";
import { calendarEventsListStyles } from "../../../styles/calendar-styles/calendar-events-list-styles";
import { styles } from "../../../styles/styles";
import CalendarEventsList from "./CalendarEventsList";
import { calendarEventsSectionStyles } from "../../../styles/calendar-styles/calendar-events-section-styles";

interface ICalendarEventsSectionProps {
  calendarEvents: ICalendarEvent[];
}

export default function CalendarEventsSection(
  props: ICalendarEventsSectionProps
): JSX.Element {
  const { calendarEvents } = props;
  return (
    <View>
      <View style={calendarEventsSectionStyles.eventsSectionContainer}>
        <View style={styles.inlineItems}>
          <IonIcon name="calendar-sharp" size={30} style={[styles.mt10]} />
          <Text variant="titleLarge" style={[styles.ml10, styles.mt10]}>
            Events
          </Text>
        </View>
        {calendarEvents.length > 0 ? (
          <CalendarEventsList calendarEvents={calendarEvents} />
        ) : (
          <Text
            variant="bodyLarge"
            style={[
              styles.mt10,
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
