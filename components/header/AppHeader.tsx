import { View, Text } from "react-native";
import { styles } from "../../styles/styles";

interface AppHeaderProps {
  headerText: string;
  subText: string;
}

export default function AppHeader(props: AppHeaderProps): JSX.Element {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.headerText}</Text>
      <Text style={styles.subText}>{props.subText}</Text>
    </View>
  );
}
