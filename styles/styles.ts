import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 100,
    marginBottom: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },
  subText: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
    color: "#808080",
  },
  dateText: {
    marginTop: 50,
    marginBottom: 25,
    fontSize: 12,
    color: "#000000",
  },
  calendarContainer: {
    marginTop: 50,
    marginBottom: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  eventInfoContainer: {
    marginTop: 50,
    marginBottom: 50,
    // backgroundColor: "#000000",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
