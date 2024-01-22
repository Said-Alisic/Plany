import { View } from "react-native";
import { Divider, Text } from "react-native-paper";

export default function DividerText(): JSX.Element {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 25,
          marginTop: 50,
        },
      ]}
    >
      <Divider
        style={[{ backgroundColor: "#000000", marginRight: 10, width: "40%" }]}
      />
      <Text style={{ color: "#4d4d4d", fontWeight: "bold" }}>Or</Text>
      <Divider
        style={[{ backgroundColor: "#000000", marginLeft: 10, width: "40%" }]}
      />
    </View>
  );
}
