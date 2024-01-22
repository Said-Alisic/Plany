import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../common/types";
import { authComponentStyles } from "../../../styles/auth-styles/auth-component-styles";

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
    <Text style={authComponentStyles.redirectText}>
      {`${questionText} `}
      <Text
        style={authComponentStyles.redirectTextLink}
        onPress={() => handleRedirect()}
      >
        {redirectText}
      </Text>
    </Text>
  );
}
