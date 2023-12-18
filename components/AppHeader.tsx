import { View, Text } from "react-native";
import { styles } from "../styles/styles";

export default function AppHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Plany</Text>
      <Text style={styles.subText}>
        Mobile App for tracking events in a calendar
      </Text>
    </View>
  );
}
