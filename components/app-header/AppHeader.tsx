import { Text, View } from "react-native";
import { appHeaderStyles } from "../../styles/app-header-styles";

interface AppHeaderProps {
  headerText: string;
  subText: string;
}

export default function AppHeader(props: AppHeaderProps): JSX.Element {
  return (
    <View style={appHeaderStyles.appHeaderContainer}>
      <Text style={appHeaderStyles.appHeaderText}>{props.headerText}</Text>
      <Text style={appHeaderStyles.appHeaderSubText}>{props.subText}</Text>
    </View>
  );
}
