import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
      <Navigation />
    </SafeAreaProvider>
  );
}
