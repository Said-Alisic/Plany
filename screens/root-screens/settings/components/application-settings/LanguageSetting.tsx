import { View } from "react-native";
import { useState } from "react";
import { Text, TouchableRipple } from "react-native-paper";
import IonIcon from "react-native-vector-icons/Ionicons";
import { styles } from "../../../../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../common/types";
import { applicationSettingsStyles } from "../../../../../styles/settings-styles/application-settings-styles";

export default function LanguageSetting(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // TODO: Add logic for setting language at a later date
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [language, setLanguage] = useState<string>("English");

  const handlePress = () => {
    navigation.navigate("SettingsOptions", { screen: "LanguageSelect" });
  };

  return (
    <View style={applicationSettingsStyles.subContainer}>
      <Text
        style={[styles.mb10, styles.ml10, applicationSettingsStyles.headerText]}
        variant="bodyLarge"
      >
        Language
      </Text>
      <View>
        <TouchableRipple
          style={applicationSettingsStyles.button}
          onPress={handlePress}
          rippleColor="rgba(255, 255, 255, .11)"
        >
          <View style={styles.inlineItems}>
            <IonIcon
              name="language-outline"
              size={20}
              style={applicationSettingsStyles.buttonIcon}
            />
            <Text style={applicationSettingsStyles.buttonText}>{language}</Text>
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
