import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from "~/hooks/theme";
import { SignUpOptionsScreen, LoginScreen, ForgotPasswordScreen, MainScreen, CreateAccountScreen } from "~/screens";

type MainStackParamsList = { 
  LoginOption: undefined;
  SignUpOption: undefined;
  ForgotOption: undefined;
  MainOption: undefined;
  CreateOption: undefined;
 
};

const MainStack = createNativeStackNavigator<MainStackParamsList>();

export const Router = () => {
  const { colors, fonts } = useTheme();

  return (
    <MainStack.Navigator
    >
      <MainStack.Group
        screenOptions={{
          headerBackButtonMenuEnabled: false,
          headerShadowVisible: false,
          headerBackVisible:false,
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
        name="LoginOption"
        component={ LoginScreen }
       options={{
        title: "Welcome Back!"
       }}
        />
        <MainStack.Screen
          name="SignUpOption"
          component={SignUpOptionsScreen}
          options={{
            title: "Create Account",
          }}
        />
        <MainStack.Screen
          name="ForgotOption"
          component={ForgotPasswordScreen}
          options={{
            title: "",
          }}
        />
        <MainStack.Screen
          name="MainOption"
          component={MainScreen}
          options={{
            title:""
          }}
        />
        <MainStack.Screen
          name="CreateOption"
          component={CreateAccountScreen}
          options={{
            title:"Create an Account"
          }}
        />
        
      </MainStack.Group>
    </MainStack.Navigator>
  );
};
