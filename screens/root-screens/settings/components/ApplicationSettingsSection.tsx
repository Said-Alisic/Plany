import { ScrollView } from "react-native";
import { applicationSettingsStyles } from "../../../../styles/settings-styles/application-settings-styles";
import ThemeSetting from "./application-settings/ThemeSetting";
import LanguageSetting from "./application-settings/LanguageSetting";
import NotificationSetting from "./application-settings/NotificationSetting";

export default function ApplicationSettingsSection(): JSX.Element {
  return (
    <ScrollView style={[applicationSettingsStyles.settingsContainer]}>
      <ThemeSetting />
      <LanguageSetting />
      <NotificationSetting />
    </ScrollView>
  );
}
