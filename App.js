import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { AuthProvider } from "./src/services/auth/auth.context";

import {
  useFonts,
  Lato_700Bold,
  Lato_400Regular,
  Lato_400Regular_Italic,
} from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyBvosQRBLsQjtc1Y-9y__aefnW-0RZ2ajM",
  authDomain: "mealstogo-c7a53.firebaseapp.com",
  projectId: "mealstogo-c7a53",
  storageBucket: "mealstogo-c7a53.appspot.com",
  messagingSenderId: "292035444557",
  appId: "1:292035444557:web:c39cd82ad971ed782a4104",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export default function App() {
  const [latoLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
    Lato_400Regular_Italic,
  });
  if (!latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </ThemeProvider>
      <ExpoStatusBar styles="auto" />
    </>
  );
}

// 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
