import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "../../common/types";
import { LanguageSelectScreen, ThemeSelectScreen } from "../../screens";
import IonIcon from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();

const SettingsOptionsStacks = (): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "#fffbfe" }, // NOTE: React Native Paper background colour theme
        headerTransparent: true,
        headerTintColor: "#000000",
        headerLeft: () => (
          <IonIcon
            name="chevron-back"
            size={24}
            color="#000000"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    >
      <Stack.Screen
        name="ThemeSelect"
        component={ThemeSelectScreen}
        options={{
          headerTitle: "Theme",
        }}
      />
      <Stack.Screen
        name="LanguageSelect"
        component={LanguageSelectScreen}
        options={{
          headerTitle: "Language",
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsOptionsStacks;
