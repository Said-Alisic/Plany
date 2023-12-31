import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation/Navigation";

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
      <Navigation />
    </SafeAreaProvider>
  );
}
