import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DiscoverSVGIcon,
  EventsSVGIcon,
  FieldsSVGIcon,
  HomeSVGIcon,
  ProfileSVGIcon,
} from "~/assets/icons";
import { Text } from "~/components";
import { useTheme } from "~/hooks/theme";
import {
  HomeScreen,
  FieldsScreen,
  EventsScreen,
  DiscoverScreen,
  ProfileScreen,
} from "~/screens";

export type HomeTabsRouteParamList = {
  Home: undefined;
  Fields: undefined;
  Discover: undefined;
  Events: undefined;
  Profile: undefined;
};

type TabsName = keyof HomeTabsRouteParamList;

type IconReturn = typeof DiscoverSVGIcon;

type IconType = {
  [x in TabsName]: IconReturn;
};

const HomeTabsNavigator = createBottomTabNavigator<HomeTabsRouteParamList>();

const icons: IconType = {
  Home: HomeSVGIcon,
  Fields: FieldsSVGIcon,
  Discover: DiscoverSVGIcon,
  Events: EventsSVGIcon,
  Profile: ProfileSVGIcon,
};

export const HomeTabsRouter = () => {
  const { fonts, colors } = useTheme();

  return (
    <HomeTabsNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const Icon = icons[route.name];

          return <Icon focused={focused} />;
        },
        tabBarLabel: ({ focused }) => (
          <Text
            color={focused ? colors.green[1] : colors.black}
            font={focused ? fonts.inter[700] : fonts.inter[500]}
            size={12}
          >
            {route.name}
          </Text>
        ),
      })}
    >
      <HomeTabsNavigator.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <HomeTabsNavigator.Screen
        name="Fields"
        component={FieldsScreen}
        options={{ headerShown: false }}
      />
      <HomeTabsNavigator.Screen name="Discover" component={DiscoverScreen} />
      <HomeTabsNavigator.Screen name="Events" component={EventsScreen} />
      <HomeTabsNavigator.Screen name="Profile" component={ProfileScreen} />
    </HomeTabsNavigator.Navigator>
  );
};
