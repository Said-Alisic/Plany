import { ScrollView } from "react-native";
import { applicationSettingsSectionStyles } from "../../../styles/settings-styles/application-settings-section-styles";
import ThemeSetting from "./application-settings/ThemeSetting";
import LanguageSetting from "./application-settings/LanguageSetting";
import NotificationSetting from "./application-settings/NotificationSetting";

export default function ApplicationSettingsSection(): JSX.Element {
  return (
    <ScrollView style={[applicationSettingsSectionStyles.settingsContainer]}>
      <ThemeSetting />
      <LanguageSetting />
      <NotificationSetting />
    </ScrollView>
  );
}
