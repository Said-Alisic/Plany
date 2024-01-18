import { View } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";
import { styles } from "../../../../../styles/styles";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Languages } from "../../../../../common/enums";
import { formatStringToTitleCase } from "../../../../../common/helpers";

// TODO: Move component into a different folder?
export default function LanguageSelectScreen(): JSX.Element {
  // TODO: Add helper method or an enum with all available languages

  const languages: { key: string; value: string }[] = Object.entries(
    Languages
  ).map(([key, value]) => ({
    key,
    value: formatStringToTitleCase(value),
  }));

  const handlePress = (language: string) => {
    console.log("Set language to: ", language);
  };

  // TODO: #16 -> Move inline styles to a separate styles file
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: 120,
          marginLeft: 15,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        },
      ]}
    >
      {languages.map((language, index) => {
        return (
          <TouchableRipple
            key={index}
            style={{
              backgroundColor: "#262626",
              width: "95.8%",
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 20,
              marginBottom: 10,
            }}
            onPress={() => handlePress(language.key)}
            rippleColor="rgba(255, 255, 255, .11)"
          >
            <View style={styles.inlineItems}>
              <IonIcon
                name={language.value === "System" ? "cog" : "language"}
                size={20}
                style={{
                  color: "#ffffff",
                  marginLeft: 15,
                }}
              />
              <Text style={{ color: "#ffffff", marginLeft: 10 }}>
                {language.value}
              </Text>
              {/* TODO: #FEATURE -> Add logic for setting icon on the currently used Language value */}
              {language.value === "English" ? (
                <IonIcon
                  name="checkmark-outline"
                  size={25}
                  style={{
                    right: 12,
                    bottom: -3,
                    color: "#00b300",
                    alignSelf: "flex-end",
                    position: "absolute",
                  }}
                />
              ) : null}
            </View>
          </TouchableRipple>
        );
      })}
      <Text
        variant="bodySmall"
        style={{
          right: 5,
          width: "95%",
          alignSelf: "center",
          color: "#4d4d4d",
        }}
      >
        If system is selected, then Plany will automatically adjust the display
        language based on your device{"'"}s system settings.
      </Text>
    </View>
  );
}
