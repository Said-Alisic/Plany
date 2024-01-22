import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsOptionsStacks from "./stacks/SettingsOptionsStacks";
import AuthStacks from "./stacks/AuthStacks";
import BottomNavigationTabs from "./tabs/BottomNavigationTabs";

const Stack = createNativeStackNavigator();

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Root" component={BottomNavigationTabs} />
        <Stack.Screen
          name="SettingsOptions"
          component={SettingsOptionsStacks}
        />
        <Stack.Screen name="Auth" component={AuthStacks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
