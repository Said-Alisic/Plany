import { useState } from "react";
import { View } from "react-native";
import { Switch, Text } from "react-native-paper";
import IonIcon from "react-native-vector-icons/Ionicons";
import { styles } from "../../../../../styles/styles";
import { applicationSettingsStyles } from "../../../../../styles/settings-styles/application-settings-styles";

export default function NotificationSetting(): JSX.Element {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  // TODO: Add logic for enabling/disabling notifications at a later date

  const onToggleNotifications = (): void => {
    setIsNotificationsEnabled(!isNotificationsEnabled);
  };

  return (
    <View style={applicationSettingsStyles.SubContainer}>
      <Text
        style={[styles.mb10, styles.ml10, applicationSettingsStyles.HeaderText]}
        variant="bodyLarge"
      >
        Nofitications
      </Text>
      <View style={applicationSettingsStyles.Button}>
        <View style={styles.inlineItems}>
          <IonIcon
            name={
              isNotificationsEnabled
                ? "notifications"
                : "notifications-off-outline"
            }
            size={20}
            style={applicationSettingsStyles.ButtonIcon}
          />
          <Text style={applicationSettingsStyles.ButtonText}>
            Enable Notification
          </Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={onToggleNotifications}
            trackColor={{ false: "#ffffff", true: "#00b300" }}
            ios_backgroundColor={"#a6a6a6"}
            style={applicationSettingsStyles.Switch}
          />
        </View>
      </View>
      <Text
        variant="bodySmall"
        style={applicationSettingsStyles.NotificationOptionInfoText}
      >
        Enable push notifications, including notification messages, sounds, and
        vibration.
      </Text>
    </View>
  );
}
