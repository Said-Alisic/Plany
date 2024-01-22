/* eslint-disable react-native/no-raw-text */
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../common/types";

export default function SignInForm(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSignIn = () => {
    // Add your sign-in logic here
    if (email && password) {
      // Successful sign-in logic
      console.log(
        `Logged in with email "${email}" and password "${password}".`
      );

      navigation.navigate("Root", { screen: "Calendar" });
    } else {
      // Unsuccessful sign-in logic
      console.log("Could not sign in user.");
    }
  };

  return (
    <View style={signInStyles.signInForm}>
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={{
          backgroundColor: "transparent",
        }}
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.nativeEvent.text)}
        style={signInStyles.input}
      />
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={{
          backgroundColor: "transparent",
        }}
        label="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.nativeEvent.text);
        }}
        secureTextEntry
        style={signInStyles.input}
      />
      <Button
        contentStyle={{ backgroundColor: "#000000" }}
        textColor="#ffffff"
        mode="contained"
        onPress={handleSignIn}
        style={signInStyles.button}
      >
        Sign In
      </Button>
    </View>
  );
}

const signInStyles = StyleSheet.create({
  input: {
    borderRadius: 5,
    marginBottom: 12,
    width: "90%",
  },
  button: {
    borderRadius: 5,
    marginTop: 12,
    width: "90%",
  },
  signInForm: {
    alignItems: "center",
    width: "100%",
  },
});
