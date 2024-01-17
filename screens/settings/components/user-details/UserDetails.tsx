import { View } from "react-native";
import { IUser } from "../../../../common/interfaces";
import { Text } from "react-native-paper";
import { styles } from "../../../../styles/styles";

interface IUserDetailsProps {
  user: IUser;
}

export default function UserDetails(props: IUserDetailsProps): JSX.Element {
  const { user } = props;

  return (
    <View>
      <View style={styles.inlineItems}>
        <Text variant="titleMedium">{user.firstname} </Text>
        <Text variant="titleMedium">{user.lastname} </Text>
        {/* <View style={styles.mr10}>{renderUserAvatarOrIcon(profilePictureUrl)}</View> */}
      </View>
      <View>
        <Text
          variant="labelSmall"
          style={{
            color: "#4d4d4d",
          }} // TODO: #16 -> Add styles file for this
        >
          {user.email}
        </Text>
      </View>
    </View>
  );
}
