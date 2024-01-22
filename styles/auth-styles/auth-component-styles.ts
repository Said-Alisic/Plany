import { StyleSheet } from "react-native";

export const authComponentStyles = StyleSheet.create({
  container: {
    paddingTop: 150,
    alignItems: "center",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 50,
  },
  divider: { backgroundColor: "#000000", width: "40%" },
  dividerText: { color: "#4d4d4d", fontWeight: "bold" },
  redirectText: {
    marginTop: 20,
    color: "#4d4d4d",
  },
  redirectTextLink: { color: "#000000", fontWeight: "bold" },
  socialProviderButton: { marginLeft: 10, marginRight: 10 },
});
