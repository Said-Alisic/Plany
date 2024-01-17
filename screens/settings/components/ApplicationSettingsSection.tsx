import { ScrollView } from "react-native";
import { applicationSettingsSectionStyles } from "../../../styles/settings-styles/application-settings-section-styles";
import ThemeSetting from "./application-settings/ThemeSetting";
import LanguageSetting from "./application-settings/LanguageSetting";

export default function ApplicationSettingsSection(): JSX.Element {
  return (
    <ScrollView style={[applicationSettingsSectionStyles.settingsContainer]}>
      {/* TODO: #16 -> Add application settings timezone component */}
      {/* TODO: #16 -> Add application settings notification component */}
      <ThemeSetting />
      <LanguageSetting />
    </ScrollView>
  );
}
