import { StyleSheet } from "react-native";

export const userDetailsStyles = StyleSheet.create({
  settingsContainer: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  userAvatar: { backgroundColor: "#262626" },
  userEmailText: {
    color: "#4d4d4d",
  },
  logoutButton: {
    marginRight: 16,
    alignSelf: "flex-end",
    position: "absolute",
    right: 0,
    bottom: 5,
  },
  logoutButtonIcon: { marginLeft: 3 },
});
