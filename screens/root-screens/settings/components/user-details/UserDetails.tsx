import { View } from "react-native";
import { IUser } from "../../../../../common/interfaces";
import { Text } from "react-native-paper";
import { styles } from "../../../../../styles/styles";
import { userDetailsStyles } from "../../../../../styles/settings-styles/user-details-styles";

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
      </View>
      <View>
        <Text variant="labelSmall" style={userDetailsStyles.userEmailText}>
          {user.email}
        </Text>
      </View>
    </View>
  );
}
