import { ScrollView, View } from "react-native";
import React from "react";
import { AppHeader } from "../../components";
import Calendar from "./components/Calendar";
import { styles } from "../../styles/styles";

export default function CalendarScreen() {
  const appHeaderText = "Plany";
  const appSubText = "Mobile App for tracking events in a calendar";

  return (
    <ScrollView style={styles.container}>
      <AppHeader headerText={appHeaderText} subText={appSubText} />
      <Calendar />
    </ScrollView>
  );
}
