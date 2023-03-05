import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useTheme } from "~/hooks/theme";
import {
  ForgotPasswordScreen,
  SignInScreen,
  SignUpOptionsScreen,
  SignUpScreen,
} from "~/screens";
import { HomeTabsRouter } from "./home-tabs";

export type MainStackParamsList = {
  SignUpOptions: undefined;
  HomeTabs: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamsList>();

export const Router = () => {
  const { colors, fonts } = useTheme();

  return (
    <MainStack.Navigator>
      <MainStack.Group
        screenOptions={{
          headerBackButtonMenuEnabled: false,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitleStyle: {
            color: colors.blue[10],
            fontFamily: fonts.inter[600],
            fontSize: 22,
          },
          contentStyle: {
            backgroundColor: colors.white,
          },
        }}
      >
        <MainStack.Screen
          name="SignUpOptions"
          component={SignUpOptionsScreen}
          options={{
            title: "Welcome Back!",
          }}
        />
        <MainStack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: "Welcome Back!",
          }}
        />
        <MainStack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: "Create Account",
          }}
        />
        <MainStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            title: "Please enter your email",
          }}
        />
      </MainStack.Group>

      <MainStack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="HomeTabs" component={HomeTabsRouter} />
      </MainStack.Group>
    </MainStack.Navigator>
  );
};
