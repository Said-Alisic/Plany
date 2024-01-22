/* eslint-disable react-native/no-raw-text */
import { StyleSheet, View } from "react-native";
import { styles } from "../../styles/styles";
import FacebookSocialButton from "./components/social-provider-buttons/FacebookSocialButton";
import XSocialButton from "./components/social-provider-buttons/XSocialButton";
import GmailSocialButton from "./components/social-provider-buttons/GmailSocialButton";
import AppleSocialButton from "./components/social-provider-buttons/AppleSocialButton";
import DividerText from "./components/DividerText";
import RedirectText from "./components/RedirectText";
import HeaderText from "./components/HeaderText";
import SignInForm from "./components/auth-forms/SignInForm";

export default function SignInScreen(): JSX.Element {
  return (
    <View style={[styles.container, signInStyles.signInContainer]}>
      <HeaderText headerText="Sign In" />

      {/* Account Sign In Form */}
      <SignInForm />

      <DividerText />

      {/* Social Login Buttons */}
      <View style={signInStyles.socialButtonsContainer}>
        <GmailSocialButton />
        <FacebookSocialButton />
        <XSocialButton />
        <AppleSocialButton />
      </View>

      {/* Redirect to Sign Up text */}
      <RedirectText
        questionText="Don't have an account?"
        redirectText="Sign Up"
        redirectScreen="SignUp"
      />
    </View>
  );
}

const signInStyles = StyleSheet.create({
  signInContainer: {
    paddingTop: 150,
    alignItems: "center",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
