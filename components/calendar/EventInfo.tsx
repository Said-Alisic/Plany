import {
  formatDateTimeStringToDate,
  formatDateTimeToHoursAndMinutes,
  formatStringToTitleCase,
} from "../../common/helpers";
import { ICalendarEvent } from "../../common/interfaces";
import { styles } from "../../styles/styles";
import { Card, Text } from "react-native-paper";

interface EventInfoProps {
  event: ICalendarEvent;
}

export default function EventInfo(props: EventInfoProps) {
  const calendarEvent: ICalendarEvent = {
    ...props.event,
  };

  return (
    <Card style={styles.eventInfoContainer}>
      <Card.Title
        title={calendarEvent.title}
        titleStyle={styles.fontWeightBold}
        titleVariant="titleLarge"
      />
      <Card.Content style={styles.mb25}>
        <Text variant="titleMedium" style={styles.fontWeightBold}>
          Date
        </Text>
        <Text variant="bodyMedium">
          {formatDateTimeStringToDate(calendarEvent.dateAndTime)}
        </Text>
        <Text variant="titleMedium" style={styles.fontWeightBold}>
          Time of Day
        </Text>
        <Text variant="bodyMedium">
          {formatDateTimeToHoursAndMinutes(calendarEvent.dateAndTime)}
        </Text>
        <Text variant="titleMedium" style={styles.fontWeightBold}>
          Location
        </Text>
        <Text variant="bodyMedium">{calendarEvent.location}</Text>
        <Text variant="titleMedium" style={styles.fontWeightBold}>
          Status
        </Text>
        <Text variant="bodyMedium">
          {formatStringToTitleCase(calendarEvent.status)}
        </Text>
      </Card.Content>
    </Card>
  );
}
