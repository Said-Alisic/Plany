import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { format } from "date-fns";
import CalendarPicker, {
  DateChangedCallback,
} from "react-native-calendar-picker";
import moment, { Moment } from "moment";
import * as ExpoCalendar from "expo-calendar";

export default function App() {
  const [selectedStartDate, setSelectedStartDate] = useState<Moment | null>(
    null
  );

  const handleDateChange: DateChangedCallback = (date: Moment) => {
    setSelectedStartDate(date);
  };

  const startDate: string = selectedStartDate
    ? moment(selectedStartDate).format("YYYY-MM-DD").toString()
    : "";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Plany</Text>
        <Text style={styles.subText}>
          Mobile App for tracking events in a calendar
        </Text>
      </View>
      <View style={styles.calendarContainer}>
        <CalendarPicker onDateChange={handleDateChange} />
        <Text style={styles.dateText}>Selected Date: {startDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 100,
    marginBottom: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  subText: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
    color: "#808080",
  },
  dateText: {
    marginTop: 50,
    marginBottom: 25,
    fontSize: 12,
    color: "#000000",
  },
  calendarContainer: {
    marginTop: 50,
    marginBottom: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
