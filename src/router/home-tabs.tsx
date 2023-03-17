import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DiscoverSVGIcon,
  EventsSVGIcon,
  FieldsSVGIcon,
  HomeSVGIcon,
  ProfileSVGIcon,
} from "~/assets/icons";
import { Text } from "~/components";
import { useTheme } from "~/hooks/theme";
import { HomeScreen, FieldsScreen, FieldsDetailsScreen } from "~/screens";

type HomeTabsRouteParamsList = {
  Home: undefined;
  Fields: undefined;
  Discover: undefined;
  Events: undefined;
  Profile: undefined;
};

type TabsName = keyof HomeTabsRouteParamsList;

type IconReturn = typeof DiscoverSVGIcon;

type IconType = {
  [x in TabsName]: IconReturn;
};

const HomeTabsNavigator = createBottomTabNavigator<HomeTabsRouteParamsList>();

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
      <HomeTabsNavigator.Screen name="Discover" component={HomeScreen} />
      <HomeTabsNavigator.Screen name="Events" component={HomeScreen} />
      <HomeTabsNavigator.Screen name="Profile" component={HomeScreen} />
    </HomeTabsNavigator.Navigator>
  );
};
