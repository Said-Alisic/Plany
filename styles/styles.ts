import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dividerMargin: {
    marginTop: 25,
    backgroundColor: "#808080",
  },
  appHeaderContainer: {
    marginTop: 60,
    marginLeft: 10,
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
    marginBottom: 50,
  },
  selectedDateText: {
    alignSelf: "center",
    fontSize: 20,
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
});
