import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { AppHeader } from "../components";
import { CalendarScreen } from "../screens";
import { bottomNavigationStyles } from "../styles/bottom-navigation-styles";

export default function Navigation(): JSX.Element {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "calendar",
      title: "Calendar",
      focusedIcon: "calendar-month",
      unfocusedIcon: "calendar-month-outline",
    },
    {
      key: "settings",
      title: "Settings",
      focusedIcon: "cog",
      unfocusedIcon: "cog-outline",
    },
  ]);

  // Determines which screen to render based on the button selected in the navigation bar
  const renderScene = BottomNavigation.SceneMap({
    calendar: () => <CalendarScreen />,
    settings: () => <AppHeader headerText="Plany" subText="Settings" />, // TODO: #16 -> Create a new `<SettingsScreen/>` component
  });

  // Styling for the BottomNavigation component props
  const navigationStyles = {
    activeColor: "#000000",
    inactiveColor: "#ffffff",
    theme: {
      colors: { secondaryContainer: "#ffffff" },
    },
  };

  return (
    <BottomNavigation
      // NOTE: `navigationState` is deprecated seems to only show due to the `color` option being deprecated in theme V3,
      // otherwise it is still in use in the latest version of React Native Paper
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled={false}
      sceneAnimationEnabled={true}
      sceneAnimationType="shifting"
      barStyle={bottomNavigationStyles.barStyle} // Set the background color
      activeColor={navigationStyles.activeColor} // Set the active tab color
      inactiveColor={navigationStyles.inactiveColor} // Set the inactive tab color
      theme={navigationStyles.theme}
    />
  );
}
