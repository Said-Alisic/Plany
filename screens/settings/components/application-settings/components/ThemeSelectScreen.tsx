import { View } from "react-native";
import React from "react";
import { TouchableRipple, Text } from "react-native-paper";
import { Theme } from "../../../../../common/enums";
import { styles } from "../../../../../styles/styles";
import { formatStringToTitleCase } from "../../../../../common/helpers";
import IonIcon from "react-native-vector-icons/Ionicons";

// TODO: Move component into a different folder?
export default function ThemeSelectScreen(): JSX.Element {
  const themes = Object.keys(Theme);

  const themeIcon = (theme: string): string => {
    switch (theme) {
      case Theme.DARK:
        return "moon";
      case Theme.LIGHT:
        return "sunny";
      // Default will be treated as `Theme.SYSTEM`
      default:
        return "cog";
    }
  };

  const handlePress = (theme: string) => {
    console.log("Set theme to: ", theme);
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
      {themes.map((theme, index) => {
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
            onPress={() => handlePress(theme)}
            rippleColor="rgba(255, 255, 255, .11)"
          >
            <View style={styles.inlineItems}>
              <IonIcon
                name={themeIcon(theme)}
                size={20}
                style={{
                  color: "#ffffff",
                  marginLeft: 15,
                }}
              />
              <Text style={{ color: "#ffffff", marginLeft: 10 }}>
                {formatStringToTitleCase(theme)}
              </Text>
              {/* TODO: #FEATURE -> Add logic for setting icon on the currently used Theme enum value */}
              {theme === Theme.LIGHT ? (
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
          marginLeft: 2,
          width: "95%",
          alignSelf: "center",
          color: "#4d4d4d",
        }}
      >
        If system is selected, the Plany will automatically adjust the theme
        appearance based on your device{"'"}s system settings.
      </Text>
    </View>
  );
}
