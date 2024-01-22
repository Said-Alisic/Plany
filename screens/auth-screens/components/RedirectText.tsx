import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../common/types";

interface IRedirectTextProps {
  questionText: string;
  redirectText: string;
  redirectScreen: string;
}

export default function RedirectText(props: IRedirectTextProps): JSX.Element {
  const { questionText, redirectText, redirectScreen } = props;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleRedirect = () => {
    navigation.navigate("Auth", { screen: redirectScreen });
  };

  return (
    <Text style={signInStyles.redirectText}>
      {`${questionText} `}
      <Text
        style={{ color: "#000000", fontWeight: "bold" }}
        onPress={() => handleRedirect()}
      >
        {redirectText}
      </Text>
    </Text>
  );
}

const signInStyles = StyleSheet.create({
  redirectText: {
    marginTop: 20,
    color: "#4d4d4d",
  },
});
