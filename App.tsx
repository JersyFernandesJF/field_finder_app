import { SafeAreaProvider } from "react-native-safe-area-context";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "~/hooks/theme";
import { Router } from "~/router";
import { AuthProvider } from "~/config/firebase/Providers/AuthProvider";
import { SportsDatabaseProvider } from "~/config/firebase/Providers/SportsProvider";
import { FieldsDataBaseProvider } from "~/config/firebase/Providers/FieldsProvider";
import { EventDataBaseProvider } from "~/config/firebase/Providers/EventProvider";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ThemeProvider>
        <AuthProvider>
          <FieldsDataBaseProvider>
            <SportsDatabaseProvider>
              <EventDataBaseProvider>
                <NavigationContainer>
                  <Router />
                </NavigationContainer>
              </EventDataBaseProvider>
            </SportsDatabaseProvider>
          </FieldsDataBaseProvider>
        </AuthProvider>
      </ThemeProvider>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
