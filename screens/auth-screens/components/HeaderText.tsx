import { Text } from "react-native-paper";
import { styles } from "../../../styles/styles";

interface IHeaderTextProps {
  headerText: string;
}

export default function HeaderText(props: IHeaderTextProps): JSX.Element {
  const { headerText } = props;

  return (
    <Text variant="headlineLarge" style={[styles.mb25]}>
      {headerText}
    </Text>
  );
}
