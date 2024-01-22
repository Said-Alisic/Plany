/* eslint-disable react-native/no-raw-text */
import { View } from "react-native";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../common/types";
import { authFormStyles } from "../../../../styles/auth-styles/auth-form-styles";

export default function SignInForm(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // TODO: Add Sign In logic later when Plany-API is updated
  const handleSignIn = () => {
    if (email && password) {
      console.log(
        `Logged in with email "${email}" and password "${password}".`
      );

      navigation.navigate("Root", { screen: "Calendar" });
    } else {
      console.log("Could not sign in user.");
    }
  };

  return (
    <View style={authFormStyles.container}>
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={authFormStyles.textInputUnderline}
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.nativeEvent.text)}
        style={authFormStyles.textInput}
      />
      <TextInput
        mode="outlined"
        theme={{ roundness: 5 }}
        underlineStyle={authFormStyles.textInputUnderline}
        label="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.nativeEvent.text);
        }}
        secureTextEntry
        style={authFormStyles.textInput}
      />
      <Button
        contentStyle={authFormStyles.buttonContent}
        textColor="#ffffff"
        mode="contained"
        onPress={handleSignIn}
        style={authFormStyles.button}
      >
        Sign In
      </Button>
    </View>
  );
}
