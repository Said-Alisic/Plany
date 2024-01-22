import { StyleSheet } from "react-native";

export const applicationSettingsStyles = StyleSheet.create({
  settingsContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  subContainer: { marginBottom: 15 },
  headerText: { color: "#4d4d4d" },
  button: {
    backgroundColor: "#262626",
    width: "95%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
  },
  buttonIcon: {
    color: "#ffffff",
    marginLeft: 15,
  },
  buttonText: { color: "#ffffff", marginLeft: 10 },
  buttonIconNext: {
    right: 10,
    color: "#ffffff",
    alignSelf: "flex-end",
    position: "absolute",
  },
  switch: {
    top: -4.5,
    right: 10,
    alignSelf: "flex-end",
    position: "absolute",
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
  optionContainer: {
    marginTop: 120,
    marginLeft: 15,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  // FIXME: #STYLINGPROBLEM -> Doesn't work for the `settings-options-screens` component styles, find out why
  optionButton: {
    backgroundColor: "#262626",
    width: "95.8%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  // FIXME: #STYLINGPROBLEM -> Doesn't work for the `settings-options-screens` component styles, find out why

  optionButtonIcon: {
    color: "#ffffff",
    marginLeft: 15,
  },
  optionButtonText: { color: "#ffffff", marginLeft: 10 },
  // FIXME: #STYLINGPROBLEM -> Doesn't work for the `settings-options-screens` component styles, find out why

  optionButtonCheckmark: {
    right: 12,
    bottom: -3,
    color: "#00b300",
    alignSelf: "flex-end",
    position: "absolute",
  },
  optionInfoText: {
    marginLeft: 2,
    width: "95%",
    alignSelf: "center",
    color: "#4d4d4d",
  },

  notificationOptionInfoText: {
    marginTop: 5,
    width: "92.5%",
    alignSelf: "center",
    color: "#4d4d4d",
  },
});
