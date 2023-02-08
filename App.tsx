import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "~/hooks/theme";
import { SignUpScreen } from "~/screens/sign-up/sign-up";

export default function App() {
  return (
    <ThemeProvider>
      <SignUpScreen />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
