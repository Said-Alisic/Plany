import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View } from "react-native";
import CalendarPicker, {
  DateChangedCallback,
} from "react-native-calendar-picker";
import moment, { Moment } from "moment";
import { styles } from "./styles/styles";

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
