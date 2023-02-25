import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "~/hooks/theme";
import { HomeScreen, SignUpOptionsScreen } from "~/screens";

type MainStackParamsList = {
  SignUpOptions: undefined;
  Home: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamsList>();

export const Router = () => {
  const { colors, fonts } = useTheme();

  return (
    <MainStack.Navigator>
      <MainStack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Home" component={HomeScreen} />
      </MainStack.Group>
      <MainStack.Group
        screenOptions={{
          headerBackButtonMenuEnabled: false,
          headerShadowVisible: false,
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
            title: "Create Account",
          }}
        />
      </MainStack.Group>
    </MainStack.Navigator>
  );
};
