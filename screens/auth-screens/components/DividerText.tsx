import { View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { authComponentStyles } from "../../../styles/auth-styles/auth-component-styles";
import { styles } from "../../../styles/styles";

export default function DividerText(): JSX.Element {
  return (
    <View style={authComponentStyles.dividerContainer}>
      <Divider style={[styles.mr10, authComponentStyles.divider]} />
      <Text style={authComponentStyles.dividerText}>Or</Text>
      <Divider style={[styles.ml10, authComponentStyles.divider]} />
    </View>
  );
}
