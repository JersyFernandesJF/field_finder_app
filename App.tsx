import { SafeAreaProvider } from "react-native-safe-area-context";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";

import { Inter_400Regular, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "~/hooks/theme";
import { Router } from "~/router";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
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
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
