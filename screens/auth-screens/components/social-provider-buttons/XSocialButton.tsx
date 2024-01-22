import { Image } from "react-native";
import { IconButton } from "react-native-paper";

export default function XSocialButton(): JSX.Element {
  const XLogoWhite = ({ size }: { size: number }) => (
    <Image
      source={require("../../../../assets/x-logo/logo-white.png")}
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
      style={{ marginLeft: 10, marginRight: 10 }}
      containerColor="#000000"
      iconColor="#ffffff"
      size={35}
      mode="contained"
      icon={() => <XLogoWhite size={22} />}
      onPress={() => handleSocialLogin("X (Twitter)")}
    />
  );
}
