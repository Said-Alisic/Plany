import { bottomNavigationStyles } from "../../styles/bottom-navigation-styles";
import CalendarScreen from "../../screens/root-screens/calendar/CalendarScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SettingsScreen } from "../../screens";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

const Tab = createMaterialBottomTabNavigator();

// Styling for the BottomNavigation component props
const navigationStyles = {
  activeColor: "#000000",
  inactiveColor: "#ffffff",
  theme: {
    colors: { secondaryContainer: "#ffffff" },
  },
};

const BottomNavigationTabs = (): JSX.Element => {
  return (
    <Tab.Navigator
      labeled={false}
      sceneAnimationEnabled={true}
      sceneAnimationType="shifting"
      barStyle={bottomNavigationStyles.barStyle} // Set the background colour
      activeColor={navigationStyles.activeColor} // Set the active tab colour
      inactiveColor={navigationStyles.inactiveColor} // Set the inactive tab colour
      theme={navigationStyles.theme}
    >
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "calendar-month" : "calendar-month-outline"}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "cog" : "cog-outline"}
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationTabs;
