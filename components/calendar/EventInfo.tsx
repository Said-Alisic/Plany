import { View, Text } from "react-native";
import { styles } from "../../styles/styles";
import { ICalendarEvent } from "../../tests/mocks";

interface EventInfoProps {
  event: ICalendarEvent;
}

export default function EventInfo(props: EventInfoProps) {
  return (
    <View style={styles.eventInfoContainer}>
      <Text>Event Title: {props.event?.title}</Text>
      <Text>Event Date: {props.event?.date.toDateString()}</Text>
      <Text>Event Time of Day: {props.event?.timeOfDay}</Text>
      <Text>Event Location: {props.event?.location}</Text>
      <Text>Event Status: {props.event?.status}</Text>
    </View>
  );
}
