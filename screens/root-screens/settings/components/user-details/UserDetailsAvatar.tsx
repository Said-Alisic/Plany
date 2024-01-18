import { View } from "react-native";
import { Avatar } from "react-native-paper";
import { styles } from "../../../../../styles/styles";
import { userDetailsStyles } from "../../../../../styles/settings-styles/user-details-styles";

interface IUserDetailsAvatarProps {
  profilePictureUrl?: string;
}

const renderUserAvatarOrIcon = (profilePictureUrl?: string): JSX.Element => {
  return profilePictureUrl !== null ? (
    <Avatar.Icon
      size={60}
      icon="account-circle"
      color="#ffffff"
      style={userDetailsStyles.userAvatar}
    />
  ) : (
    <Avatar.Image size={60} source={{ uri: profilePictureUrl }} />
  );
};

export default function UserDetailsAvatar(
  props: IUserDetailsAvatarProps,
): JSX.Element {
  const { profilePictureUrl } = props;

  return (
    <View style={styles.mr10}>{renderUserAvatarOrIcon(profilePictureUrl)}</View>
  );
}
