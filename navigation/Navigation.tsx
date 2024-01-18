import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RootStackParamList } from "../common/types";
import { bottomNavigationStyles } from "../styles/bottom-navigation-styles";
import {
  LanguageSelectScreen,
  ThemeSelectScreen,
} from "../screens/settings-options-screens";
import { CalendarScreen, SettingsScreen } from "../screens";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Styling for the BottomNavigation component props
const navigationStyles = {
  activeColor: "#000000",
  inactiveColor: "#ffffff",
  theme: {
    colors: { secondaryContainer: "#ffffff" },
  },
};

// TODO: #16 -> Split into separate component
const BottomNavigationTabs = (): JSX.Element => {
  return (
    <Tab.Navigator
      labeled={false}
      sceneAnimationEnabled={true}
      sceneAnimationType="shifting"
      barStyle={bottomNavigationStyles.barStyle} // Set the background color
      activeColor={navigationStyles.activeColor} // Set the active tab color
      inactiveColor={navigationStyles.inactiveColor} // Set the inactive tab color
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

// TODO: #16 -> Split into separate component
const SettingsOptionsStacks = (): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "#fffbfe" }, // NOTE: React Native Paper background colour theme
        headerTransparent: true,
        headerTintColor: "#000000",
        headerLeft: () => (
          <IonIcon
            name="chevron-back"
            size={24}
            color="#000000"
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    >
      <Stack.Screen
        name="ThemeSelect"
        component={ThemeSelectScreen}
        options={{
          headerTitle: "Theme",
        }}
      />
      <Stack.Screen
        name="LanguageSelect"
        component={LanguageSelectScreen}
        options={{
          headerTitle: "Language",
        }}
      />
    </Stack.Navigator>
  );
};

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Root" component={BottomNavigationTabs} />
        <Stack.Screen
          name="SettingsOptions"
          component={SettingsOptionsStacks}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
