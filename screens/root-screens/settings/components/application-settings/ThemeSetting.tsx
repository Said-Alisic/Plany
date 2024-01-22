import { View } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import { styles } from "../../../../../styles/styles";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Themes } from "../../../../../common/enums";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../common/types";
import { applicationSettingsStyles } from "../../../../../styles/settings-styles/application-settings-styles";

export default function ThemeSetting(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // TODO: Add logic for setting theme at a later date
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [theme, setTheme] = useState<Themes>(Themes.LIGHT);

  const handlePress = () => {
    navigation.navigate("SettingsOptions", { screen: "ThemeSelect" });
  };

  return (
    <View style={applicationSettingsStyles.subContainer}>
      <Text
        style={[styles.mb10, styles.ml10, applicationSettingsStyles.headerText]}
        variant="bodyLarge"
      >
        Theme
      </Text>
      <View>
        <TouchableRipple
          style={applicationSettingsStyles.button}
          onPress={handlePress}
          rippleColor="rgba(255, 255, 255, .11)"
        >
          <View style={styles.inlineItems}>
            <IonIcon
              name={theme === Themes.DARK ? "moon" : "sunny"}
              size={20}
              style={applicationSettingsStyles.buttonIcon}
            />
            <Text style={applicationSettingsStyles.buttonText}>
              {theme === Themes.DARK ? "Dark Mode" : "Light Mode"}
            </Text>
            <IonIcon
              name="chevron-forward-outline"
              size={20}
              style={applicationSettingsStyles.buttonIconNext}
            />
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
}
