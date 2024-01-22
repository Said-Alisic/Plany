import { View } from "react-native";
import { styles } from "../../styles/styles";
import FacebookSocialButton from "./components/social-provider-buttons/FacebookSocialButton";
import XSocialButton from "./components/social-provider-buttons/XSocialButton";
import GmailSocialButton from "./components/social-provider-buttons/GmailSocialButton";
import AppleSocialButton from "./components/social-provider-buttons/AppleSocialButton";
import DividerText from "./components/DividerText";
import RedirectText from "./components/RedirectText";
import HeaderText from "./components/HeaderText";
import SignUpForm from "./components/auth-forms/SignUpForm";
import { authComponentStyles } from "../../styles/auth-styles/auth-component-styles";

export default function SignUpScreen(): JSX.Element {
  return (
    <View style={[styles.container, authComponentStyles.container]}>
      {/* Account Login Form */}
      <HeaderText headerText="Sign Up" />

      {/* Account Sign Up Form */}
      <SignUpForm />

      <DividerText />

      {/* Social Login Buttons */}
      <View style={authComponentStyles.socialButtonsContainer}>
        <GmailSocialButton />
        <FacebookSocialButton />
        <XSocialButton />
        <AppleSocialButton />
      </View>

      {/* Redirect to Sign Up text */}
      <RedirectText
        questionText="Already have an account?"
        redirectText="Sign In"
        redirectScreen="SignIn"
      />
    </View>
  );
}
