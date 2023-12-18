import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { styles } from "./styles/styles";
import AppHeader from "./components/header/AppHeader";
import Calendar from "./components/calendar/Calendar";
import { Appbar, Divider, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        <AppHeader />

        <Calendar />
      </ScrollView>
    </SafeAreaProvider>
  );
}
