import { View } from "react-native";
import { AppHeader } from "../../components";
import { styles } from "../../styles/styles";

export default function CalendarScreen(): JSX.Element {
  const appHeaderText = "Plany";
  const appSubText = "Settings";

  return (
    <View style={styles.container}>
      <AppHeader headerText={appHeaderText} subText={appSubText} />
    </View>
  );
}
