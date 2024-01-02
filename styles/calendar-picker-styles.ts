import { StyleSheet } from "react-native";

export const calendarPickerStyles = StyleSheet.create({
  selectedDayTextStyle: {
    color: "#000000",
    fontWeight: "300",
  },
  selectedDayStyle: { backgroundColor: "#9fb5cc" },
  todayTextStyle: { color: "#000000" },
  textStyle: { color: "#000000" },
  todayBackgroundColor: { color: "#f7d7e1" },
  nextTitleStyle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  previousTitleStyle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  monthTitleStyle: { fontWeight: "bold", fontSize: 25 },
  yearTitleStyle: { fontWeight: "bold", fontSize: 25 },
});
