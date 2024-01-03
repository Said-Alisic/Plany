import { View, Text } from "react-native";
import { styles } from "../../styles/styles";

interface AppHeaderProps {
  headerText: string;
  subText: string;
}

export default function AppHeader(props: AppHeaderProps): JSX.Element {
  return (
    <View style={styles.appHeaderContainer}>
      <Text style={styles.appHeaderText}>{props.headerText}</Text>
      <Text style={styles.appHeaderSubText}>{props.subText}</Text>
    </View>
  );
}
