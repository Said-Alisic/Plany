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
    fontWeight: "500",
    fontSize: 20,
  },
  previousTitleStyle: {
    fontWeight: "500",
    fontSize: 20,
  },
  monthTitleStyle: { fontWeight: "bold", fontSize: 22 },
  yearTitleStyle: { fontWeight: "bold", fontSize: 22 },
  headerWrapperStyle: { width: "90%" },
  dayLabelsWrapper: { width: "100%" },
});
