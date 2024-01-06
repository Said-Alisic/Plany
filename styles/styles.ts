import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dividerMargin: {
    marginTop: 20,
    backgroundColor: "#808080",
  },
  appHeaderContainer: {
    marginTop: 50,
    marginLeft: 15,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  appHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 5,
  },
  appHeaderSubText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000000",
  },
  dateText: {
    marginTop: 50,
    marginBottom: 25,
    fontSize: 12,
    color: "#000000",
  },
  calendarContainer: {
    marginTop: 20,
  },
  selectedDateText: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  eventInfoContainer: {
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#9fb5cc",
    width: "95%",
  },
  eventInfoCardTitle: {
    alignItems: "flex-start",
  },
  eventInfoCardContent: {
    alignItems: "flex-start",
  },
  fontWeightBold: {
    fontWeight: "bold",
  },
  mb25: {
    marginBottom: 25,
  },
  mt25: {
    marginTop: 25,
  },
  mb10: {
    marginBottom: 10,
  },
  mt10: {
    marginTop: 10,
  },
  ml10: {
    marginLeft: 10,
  },
  mr10: {
    marginRight: 10,
  },
  inlineItems: { flexDirection: "row", alignItems: "center" },
});
