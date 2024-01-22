import { IconButton } from "react-native-paper";
import IonIcon from "react-native-vector-icons/Ionicons";

export default function AppleSocialButton(): JSX.Element {
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
      icon={() => <IonIcon name="logo-apple" size={25} color={"#ffffff"} />}
      onPress={() => handleSocialLogin("Apple")}
    />
  );
}
