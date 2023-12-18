import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { styles } from "./styles/styles";
import AppHeader from "./components/AppHeader";
import Calendar from "./components/Calendar";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <AppHeader />
      <Calendar />
    </ScrollView>
  );
}
