import { View } from "react-native";
import { AppHeader } from "../../components";
import { styles } from "../../styles/styles";
import { IUser } from "../../common/interfaces";
import UserDetailsSection from "./components/UserDetailsSection";
import { Languages, Themes } from "../../common/enums";
import ApplicationSettingsSection from "./components/ApplicationSettingsSection";
import { Divider } from "react-native-paper";

export default function CalendarScreen(): JSX.Element {
  const appHeaderText = "Plany";
  const appSubText = "Settings";

  // TODO: Replace with logic to get currently logged in user
  const user: IUser = {
    id: "2a81c0ec-d4ad-48dd-987b-782256e598b7",
    firstname: "John",
    lastname: "LordFallen",
    email: "johndoe@example.com",
    password: "LOTF",
    theme: Themes.SYSTEM,
    notificationsEnabled: false,
    language: Languages.ENGLISH,
    timezone: "GMT",
  };

  return (
    <View style={styles.container}>
      <AppHeader headerText={appHeaderText} subText={appSubText} />
      <UserDetailsSection user={user} />
      <Divider style={[styles.dividerMargin, styles.mb10]} />
      <ApplicationSettingsSection />
    </View>
  );
}
