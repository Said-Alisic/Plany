/* eslint-disable react-native/no-raw-text */
import { View } from "react-native";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../common/types";
import { authFormStyles } from "../../../../styles/auth-styles/auth-form-styles";

export default function SignUpForm(): JSX.Element {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // TODO: Add Sign Up logic later when Plany-API is updated
  const handleSignUp = () => {
    if (firstname && lastname && email && password) {
      console.log(
        `Signed up with first name "${firstname}", lastname "${lastname}", email "${email}" and password "${password}".`
      );

      navigation.navigate("Root", { screen: "Calendar" });
    } else {
      console.log("Could not sign up user.");
    }
  };

  return (
    <View style={authFormStyles.container}>
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={authFormStyles.textInputUnderline}
        label="First Name"
        value={firstname}
        onChangeText={(text) => setFirstname(text)}
        style={authFormStyles.textInput}
      />
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={authFormStyles.textInputUnderline}
        label="Last Name"
        value={lastname}
        onChangeText={(text) => setLastname(text)}
        style={authFormStyles.textInput}
      />
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={authFormStyles.textInputUnderline}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={authFormStyles.textInput}
      />
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={authFormStyles.textInputUnderline}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={authFormStyles.textInput}
      />
      <Button
        contentStyle={authFormStyles.buttonContent}
        textColor="#ffffff"
        mode="contained"
        onPress={handleSignUp}
        style={authFormStyles.button}
      >
        Sign Up
      </Button>
    </View>
  );
}
