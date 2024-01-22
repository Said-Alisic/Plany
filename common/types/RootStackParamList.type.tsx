// NOTE: Screens type required due to using React Native version > 0.65
//       https://reactnavigation.org/docs/typescript/#type-checking-screens
//       https://stackoverflow.com/a/69368480
export type RootStackParamList = {
  Calendar: undefined;
  Settings: undefined;
  ThemeSelect: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Root: {
    screen: string;
  };
  Auth: {
    screen: string;
  };
  SettingsOptions: {
    screen: string;
  };
};

export default RootStackParamList;
