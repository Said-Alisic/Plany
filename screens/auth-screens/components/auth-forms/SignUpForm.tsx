/* eslint-disable react-native/no-raw-text */
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../common/types";

export default function SignUpForm(): JSX.Element {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSignUp = () => {
    // Add your sign-up logic here
    if (firstname && lastname && email && password) {
      // Successful sign-up logic
      console.log(
        `Signed up with first name "${firstname}", lastname "${lastname}", email "${email}" and password "${password}".`
      );

      navigation.navigate("Root", { screen: "Calendar" });
    } else {
      // Unsuccessful sign-up logic
      console.log("Could not sign up user.");
    }
  };

  return (
    <View style={signUpStyles.signUpForm}>
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={{
          backgroundColor: "transparent",
        }}
        label="First Name"
        value={firstname}
        onChangeText={(text) => setFirstname(text)}
        style={signUpStyles.input}
      />
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={{
          backgroundColor: "transparent",
        }}
        label="Last Name"
        value={lastname}
        onChangeText={(text) => setLastname(text)}
        style={signUpStyles.input}
      />
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={{
          backgroundColor: "transparent",
        }}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={signUpStyles.input}
      />
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={{
          backgroundColor: "transparent",
        }}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={signUpStyles.input}
      />
      <Button
        contentStyle={{ backgroundColor: "#000000" }}
        textColor="#ffffff"
        mode="contained"
        onPress={handleSignUp}
        style={signUpStyles.button}
      >
        Sign Up
      </Button>
    </View>
  );
}

const signUpStyles = StyleSheet.create({
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
  signUpForm: {
    alignItems: "center",
    width: "100%",
  },
});
