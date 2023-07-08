import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "~/hooks/theme";
import {
  ForgotPasswordScreen,
  SignInScreen,
  SignUpOptionsScreen,
  SignUpScreen,
  VerificationCodeScreen,
  ChangePasswordScreen,
  ChangedPasswordScreen,
  OnboardingScreen,
  FieldsDetailsScreen,
  CreateEventScreen,
} from "~/screens";
import { HomeTabsRouter } from "./home-tabs";
import { StatusBar } from "expo-status-bar";

export type MainStackParamsList = {
  SignUpOptions: undefined;
  HomeTabs: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  VerificationCode: undefined;
  ChangedPassword: undefined;
  ChangePassword: undefined;
  Onboarding: undefined;
  CreateEvent: undefined;
  FieldsDetails: {
    name: string;
    price: number;
    details: string;
    rules: string[];
    address: string;
    availability: boolean;
  };
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
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            title: "Welcome Back!",
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="SignUpOptions"
          component={SignUpOptionsScreen}
          options={{
            title: "Welcome Back!",
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: "Sign In",
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: "Sign Up",
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            title: "Please enter your email",
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen
          name="VerificationCode"
          component={VerificationCodeScreen}
          options={{
            title: "Please enter your email",
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen
          name="ChangedPassword"
          component={ChangedPasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{
            title: "Please enter your email",
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen
          name="FieldsDetails"
          component={FieldsDetailsScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="CreateEvent"
          component={CreateEventScreen}
          options={{
            headerShown: false,
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
