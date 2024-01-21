/* eslint-disable react-native/no-raw-text */
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { styles } from "../../styles/styles";
import {
  Button,
  Divider,
  IconButton,
  Text,
  TextInput,
} from "react-native-paper";
import { Image } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";

export default function SignUpScreen(): JSX.Element {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Add your sign-in logic here
    if (email && password) {
      // Successful sign-in logic
      console.log(
        `Logged in with email "${email}" and password "${password}".`
      );
    } else {
      // Unsuccessful sign-in logic
      console.log("Could not log in user.");
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Social login with ${provider}`);
    // Add your social login logic here
  };

  const XLogoWhite = ({ size }: { size: number }) => (
    <Image
      source={require("../../assets/x-logo/logo-white.png")}
      style={{ width: size, height: size }}
    />
  );

  const FacebookLogoSecondary = ({ size }: { size: number }) => (
    <Image
      source={require("../../assets/facebook-logo/Secondary/Facebook_Logo_Secondary.png")}
      style={{ width: size, height: size }}
    />
  );

  return (
    <View style={[styles.container, signUpStyles.signUpContainer]}>
      {/* Account Login Form */}
      <Text variant="headlineLarge" style={[styles.mb25]}>
        Sign Up
      </Text>
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
        Sign In
      </Button>

      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 50,
            marginTop: 50,
          },
        ]}
      >
        <Divider
          style={[
            { backgroundColor: "#000000", marginRight: 10, width: "40%" },
          ]}
        />
        <Text style={{ color: "#4d4d4d", fontWeight: "bold" }}>Or</Text>
        <Divider
          style={[{ backgroundColor: "#000000", marginLeft: 10, width: "40%" }]}
        />
      </View>

      {/* Social Login Buttons */}
      <View style={signUpStyles.socialButtonsContainer}>
        <IconButton
          style={{ marginLeft: 10, marginRight: 10 }}
          containerColor="#000000"
          iconColor="#ffffff"
          size={35}
          mode="contained"
          icon={() => (
            <IonIcon name="logo-google" size={25} color={"#ffffff"} />
          )}
          onPress={() => handleSocialLogin("Gmail")}
        />
        <IconButton
          style={{ marginLeft: 10, marginRight: 10 }}
          containerColor="#000000"
          iconColor="#ffffff"
          size={35}
          mode="contained"
          icon={() => <FacebookLogoSecondary size={25} />}
          onPress={() => handleSocialLogin("Facebook")}
        />
        <IconButton
          style={{ marginLeft: 10, marginRight: 10 }}
          containerColor="#000000"
          iconColor="#ffffff"
          size={35}
          mode="contained"
          icon={() => <XLogoWhite size={20} />}
          onPress={() => handleSocialLogin("X (Twitter)")}
        />
        <IconButton
          style={{ marginLeft: 10, marginRight: 10 }}
          containerColor="#000000"
          iconColor="#ffffff"
          size={35}
          mode="contained"
          icon={() => <IonIcon name="logo-apple" size={25} color={"#ffffff"} />}
          onPress={() => handleSocialLogin("Apple")}
        />
      </View>
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
  signUpContainer: {
    paddingTop: 150,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
