import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "~/hooks/theme";
import { SignUpOptionsScreen, LoginScreen } from "~/screens";

type MainStackParamsList = { 
  LoginOption: undefined;
  SignUpOptions: undefined;
 
 
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
          name="SignUpOptions"
          component={SignUpOptionsScreen}
          options={{
            title: "Create Account",
          }}
        />
        
      </MainStack.Group>
    </MainStack.Navigator>
  );
};
