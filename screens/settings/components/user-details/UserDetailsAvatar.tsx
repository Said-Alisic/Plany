import { View } from "react-native";
import { Avatar } from "react-native-paper";
import { styles } from "../../../../styles/styles";

interface IUserDetailsAvatarProps {
  profilePictureUrl?: string;
}

const renderUserAvatarOrIcon = (profilePictureUrl?: string): JSX.Element => {
  return profilePictureUrl !== null ? (
    <Avatar.Icon
      size={60}
      icon="account-circle"
      color="#ffffff"
      style={{ backgroundColor: "#262626" }} // TODO: #16 -> Add styles file for this
    />
  ) : (
    <Avatar.Image size={60} source={{ uri: profilePictureUrl }} />
  );
};

export default function UserDetailsAvatar(
  props: IUserDetailsAvatarProps
): JSX.Element {
  const { profilePictureUrl } = props;

  return (
    <View style={styles.mr10}>{renderUserAvatarOrIcon(profilePictureUrl)}</View>
  );
}
