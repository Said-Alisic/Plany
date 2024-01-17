import { IconButton } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function LogoutButton(): JSX.Element {
  return (
    <IconButton
      style={{
        marginRight: 16,
        alignSelf: "flex-end",
        position: "absolute",
        right: 0,
        bottom: 5,
      }} // TODO: #16 -> Add styles file for this
      size={20}
      containerColor="#990000"
      mode="contained-tonal"
      icon={() => (
        <MaterialIcon
          name="logout"
          size={20}
          color={"#ffffff"}
          style={{ marginLeft: 3 }} // TODO: #16 -> Add styles file for this
        />
      )}
      onPress={() => console.log("Logout")}
    />
  );
}
