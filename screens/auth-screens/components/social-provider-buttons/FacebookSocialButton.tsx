import { Image } from "react-native";
import { IconButton } from "react-native-paper";
import { authComponentStyles } from "../../../../styles/auth-styles/auth-component-styles";

export default function FacebookSocialButton(): JSX.Element {
  const FacebookLogoSecondary = ({ size }: { size: number }) => (
    <Image
      source={require("../../../../assets/facebook-logo/Secondary/Facebook_Logo_Secondary.png")}
      style={{ width: size, height: size }}
    />
  );

  // TODO: #FEATURE Add social login provider logic at a later date
  const handleSocialLogin = (provider: string) => {
    console.log(`Social login with ${provider}`);
    // Add your social login logic here
  };

  return (
    <IconButton
      style={authComponentStyles.socialProviderButton}
      containerColor="#000000"
      iconColor="#ffffff"
      size={35}
      mode="contained"
      icon={() => <FacebookLogoSecondary size={25} />}
      onPress={() => handleSocialLogin("Facebook")}
    />
  );
}
