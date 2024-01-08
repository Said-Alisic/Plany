import { View } from "react-native";
import React from "react";
import { AppHeader } from "../../components";
import Calendar from "./components/Calendar";
import { styles } from "../../styles/styles";

export default function CalendarScreen(): JSX.Element {
  const appHeaderText = "Plany";
  const appSubText = "Calendar";

  return (
    <View style={styles.container}>
      <AppHeader headerText={appHeaderText} subText={appSubText} />
      <Calendar />
    </View>
  );
}
