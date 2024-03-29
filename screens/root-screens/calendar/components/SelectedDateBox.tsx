import { View } from "react-native";
import { Divider, Text } from "react-native-paper";
import moment, { Moment } from "moment";
import { selectedDateBoxStyles } from "../../../../styles/calendar-styles/selected-date-box-styles";
import { styles } from "../../../../styles/styles";

interface ISelectedDateBoxProps {
  selectedDate: Moment;
}

export default function SelectedDateBox(
  props: ISelectedDateBoxProps,
): JSX.Element {
  const { selectedDate } = props;

  return (
    <View>
      <Text style={[styles.mt25, selectedDateBoxStyles.selectedDateText]}>
        {moment().isSame(selectedDate, "day")
          ? selectedDate.format("ddd D MMM") + " - Today"
          : selectedDate.format("ddd D MMM")}
      </Text>
      <Divider style={styles.dividerMargin} />
    </View>
  );
}
