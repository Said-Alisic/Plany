import { View } from "react-native";
import { styles } from "../../styles/styles";
import { ICalendarEvent } from "../../tests/mocks";
import { Button, Card, Text } from "react-native-paper";

interface EventInfoProps {
  event: ICalendarEvent;
}

export default function EventInfo(props: EventInfoProps) {
  return (
    <Card style={styles.eventInfoContainer}>
      <Card.Title
        title={props.event.title}
        titleStyle={styles.fontWeightBold}
        titleVariant="titleLarge"
      />
      <Card.Content style={styles.mb25}>
        <Text variant="titleMedium" style={styles.fontWeightBold}>
          Date
        </Text>
        <Text variant="bodyMedium">
          {props.event.date.toLocaleDateString("en-GB", { weekday: "long" })}
        </Text>
        <Text variant="titleMedium" style={styles.fontWeightBold}>
          Time of Day
        </Text>
        <Text variant="bodyMedium">{props.event.timeOfDay}</Text>
        <Text variant="titleMedium" style={styles.fontWeightBold}>
          Location
        </Text>
        <Text variant="bodyMedium">{props.event.location}</Text>
        <Text variant="titleMedium" style={styles.fontWeightBold}>
          Status
        </Text>
        <Text variant="bodyMedium">{props.event.status}</Text>
      </Card.Content>
    </Card>
  );
}
