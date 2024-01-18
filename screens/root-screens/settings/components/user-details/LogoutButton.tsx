import { IconButton } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { userDetailsStyles } from "../../../../../styles/settings-styles/user-details-styles";

export default function LogoutButton(): JSX.Element {
  return (
    <IconButton
      style={userDetailsStyles.logoutButton}
      size={20}
      containerColor="#990000"
      mode="contained-tonal"
      icon={() => (
        <MaterialIcon
          name="logout"
          size={20}
          color={"#ffffff"}
          style={userDetailsStyles.logoutButtonIcon}
        />
      )}
      onPress={() => console.log("Logout")}
    />
  );
}
