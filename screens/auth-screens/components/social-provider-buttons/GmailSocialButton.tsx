import { IconButton } from "react-native-paper";
import IonIcon from "react-native-vector-icons/Ionicons";
import { authComponentStyles } from "../../../../styles/auth-styles/auth-component-styles";
import { styles } from "../../../../styles/styles";

export default function GmailSocialButton(): JSX.Element {
  // TODO: #FEATURE Add social login provider logic at a later date
  const handleSocialLogin = (provider: string) => {
    console.log(`Social login with ${provider}`);
    // Add your social login logic here
  };

  return (
    <IconButton
      style={authComponentStyles.socialProviderButton}
      containerColor="#000000"
      rippleColor={styles.buttonRipple.color}
      iconColor="#ffffff"
      size={35}
      mode="contained"
      icon={() => <IonIcon name="logo-google" size={25} color={"#ffffff"} />}
      onPress={() => handleSocialLogin("Gmail")}
    />
  );
}
