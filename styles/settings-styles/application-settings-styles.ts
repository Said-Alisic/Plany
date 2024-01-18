import { StyleSheet } from "react-native";

export const applicationSettingsStyles = StyleSheet.create({
  settingsContainer: {
    marginLeft: 20,
    marginTop: 20,
  },
  SubContainer: { marginBottom: 15 },
  HeaderText: { color: "#4d4d4d" },
  Button: {
    backgroundColor: "#262626",
    width: "95%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
  },
  ButtonIcon: {
    color: "#ffffff",
    marginLeft: 15,
  },
  ButtonText: { color: "#ffffff", marginLeft: 10 },
  ButtonIconNext: {
    right: 10,
    color: "#ffffff",
    alignSelf: "flex-end",
    position: "absolute",
  },
  Switch: {
    top: -4.5,
    right: 10,
    alignSelf: "flex-end",
    position: "absolute",
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
  OptionContainer: {
    marginTop: 120,
    marginLeft: 15,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  // FIXME: #STYLINGPROBLEM -> Doesn't work for the `settings-options-screens` component styles, find out why
  OptionButton: {
    backgroundColor: "#262626",
    width: "95.8%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  // FIXME: #STYLINGPROBLEM -> Doesn't work for the `settings-options-screens` component styles, find out why

  OptionButtonIcon: {
    color: "#ffffff",
    marginLeft: 15,
  },
  OptionButtonText: { color: "#ffffff", marginLeft: 10 },
  // FIXME: #STYLINGPROBLEM -> Doesn't work for the `settings-options-screens` component styles, find out why

  OptionButtonCheckmark: {
    right: 12,
    bottom: -3,
    color: "#00b300",
    alignSelf: "flex-end",
    position: "absolute",
  },
  OptionInfoText: {
    marginLeft: 2,
    width: "95%",
    alignSelf: "center",
    color: "#4d4d4d",
  },

  NotificationOptionInfoText: {
    marginTop: 5,
    width: "92.5%",
    alignSelf: "center",
    color: "#4d4d4d",
  },
});
