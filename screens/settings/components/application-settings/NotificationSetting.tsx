import { useState } from "react";
import { View } from "react-native";
import { Switch, Text } from "react-native-paper";
import IonIcon from "react-native-vector-icons/Ionicons";
import { styles } from "../../../../styles/styles";

export default function NotificationSetting(): JSX.Element {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  // TODO: Add logic for enabling/disabling notifications at a later date

  const onToggleNotifications = (): void => {
    setIsNotificationsEnabled(!isNotificationsEnabled);
  };

  // TODO: #16 -> Move inline styles to a separate styles file
  return (
    <View style={{ marginBottom: 15 }}>
      <Text
        style={[styles.mb10, styles.ml10, { color: "#4d4d4d" }]}
        variant="bodyLarge"
      >
        Nofitications
      </Text>
      <View
        style={{
          backgroundColor: "#262626",
          width: "95%",
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 20,
        }}
      >
        <View style={styles.inlineItems}>
          <IonIcon
            name={
              isNotificationsEnabled
                ? "notifications"
                : "notifications-off-outline"
            }
            size={20}
            style={{
              color: "#ffffff",
              marginLeft: 15,
            }}
          />
          <Text style={{ color: "#ffffff", marginLeft: 10 }}>
            Enable Notification
          </Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={onToggleNotifications}
            trackColor={{ false: "#ffffff", true: "#00b300" }}
            ios_backgroundColor={"#a6a6a6"}
            style={{
              top: -4.5,
              right: 10,
              alignSelf: "flex-end",
              position: "absolute",
              transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
            }}
          />
        </View>
      </View>
      <Text
        variant="bodySmall"
        style={{
          marginTop: 5,
          width: "92.5%",
          alignSelf: "center",
          color: "#4d4d4d",
        }}
      >
        Enable push notifications, including notification messages, sounds, and
        vibration.
      </Text>
    </View>
  );
}
