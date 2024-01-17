import { View } from "react-native";
import { useState } from "react";
import { Text, TouchableRipple } from "react-native-paper";
import IonIcon from "react-native-vector-icons/Ionicons";
import { styles } from "../../../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../common/types";

export default function LanguageSetting(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // TODO: Add logic for setting language at a later date
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [language, setLanguage] = useState<string>("English");

  const handlePress = () => {
    // Navigate to another screen
    navigation.navigate("SettingsOptions", { screen: "LanguageSelect" });
  };

  return (
    <View>
      <Text
        style={[styles.mb10, styles.ml10, { color: "#4d4d4d" }]}
        variant="bodyLarge"
      >
        Language
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
              name="language-outline"
              size={20}
              style={{
                color: "#ffffff",
                marginLeft: 15,
              }}
            />
            <Text style={{ color: "#ffffff", marginLeft: 10 }}>{language}</Text>
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
