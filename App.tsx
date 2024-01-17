import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";
import { PaperProvider } from "react-native-paper";

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar hidden={true} />
        <Navigation />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
