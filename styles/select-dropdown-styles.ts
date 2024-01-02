import { StyleSheet } from "react-native";
import { ICalendarEvent } from "../common/interfaces";

export const selectDropdownStyles = StyleSheet.create({
  dropdownStyle: {
    borderRadius: 10,
  },
});

export const selectDropdownButtonStyle = (
  selectedEvents: ICalendarEvent[],
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
) => {
  return StyleSheet.create({
    buttonStyle: {
      backgroundColor: "#9fb5cc",
      borderRadius: 10,
      opacity: selectedEvents.length < 1 ? 0.5 : 1,
    },
  });
};
