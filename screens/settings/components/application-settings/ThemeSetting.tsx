import { View } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import { styles } from "../../../../styles/styles";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Themes } from "../../../../common/enums";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../common/types";

export default function ThemeSetting(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // TODO: Add logic for setting theme at a later date
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [theme, setTheme] = useState<Themes>(Themes.LIGHT);

  const handlePress = () => {
    // Navigate to another screen
    navigation.navigate("SettingsOptions", { screen: "ThemeSelect" });
  };

  // TODO: #16 -> Move inline styles to a separate styles file
  return (
    <View style={{ marginBottom: 15 }}>
      <Text
        style={[styles.mb10, styles.ml10, { color: "#4d4d4d" }]}
        variant="bodyLarge"
      >
        Theme
      </Text>
      <View>
        <TouchableRipple
          style={{
            backgroundColor: "#262626",
            width: "95%",
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 20,
          }}
          onPress={handlePress}
          rippleColor="rgba(255, 255, 255, .11)"
        >
          <View style={styles.inlineItems}>
            <IonIcon
              name={theme === Themes.DARK ? "moon" : "sunny"}
              size={20}
              style={{
                color: "#ffffff",
                marginLeft: 15,
              }}
            />
            <Text style={{ color: "#ffffff", marginLeft: 10 }}>
              {theme === Themes.DARK ? "Dark Mode" : "Light Mode"}
            </Text>
            <IonIcon
              name="chevron-forward-outline"
              size={20}
              style={{
                right: 10,
                color: "#ffffff",
                alignSelf: "flex-end",
                position: "absolute",
              }}
            />
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
}
