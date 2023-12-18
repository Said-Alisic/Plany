import SelectDropdown from "react-native-select-dropdown";
import { ICalendarEvent } from "../tests/mocks";
import { useState } from "react";
import EventInfo from "./EventInfo";
import { View } from "react-native";

interface EventSelectInputProps {
  events: ICalendarEvent[];
}

export default function EventSelectInput(props: EventSelectInputProps) {
  const [selectedEvent, setSelectedEvent] = useState<ICalendarEvent | null>(
    null
  );

  return (
    <View>
      <SelectDropdown
        disabled={props.events.length < 1}
        data={props.events}
        onSelect={(event) => {
          setSelectedEvent(event);
        }}
        buttonTextAfterSelection={(item) => {
          return item.title;
        }}
        rowTextForSelection={(item) => {
          return item.title;
        }}
      />
      {selectedEvent && props.events.length > 0 ? (
        <EventInfo event={selectedEvent} />
      ) : null}
    </View>
  );
}
