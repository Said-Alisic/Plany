import { View } from "react-native";
import { IUser } from "../../../common/interfaces";
import { styles } from "../../../styles/styles";
import UserDetailsAvatar from "./user-details/UserDetailsAvatar";
import UserDetails from "./user-details/UserDetails";
import { userDetailsSectionStyles } from "../../../styles/settings-styles/user-details-section-styles";
import LogoutButton from "./user-details/LogoutButton";

interface IUserDetailsSectionProps {
  user: IUser;
}

export default function UserDetailsSection(
  props: IUserDetailsSectionProps
): JSX.Element {
  const { user } = props;

  return (
    <View
      style={[userDetailsSectionStyles.settingsContainer, styles.inlineItems]}
    >
      <UserDetailsAvatar profilePictureUrl={user.profilePictureUrl} />
      <UserDetails user={user} />
      <LogoutButton />
    </View>
  );
}
