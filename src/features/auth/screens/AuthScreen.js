import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

import {
  BackgroundImage,
  BackgroundCover,
  AuthButton,
} from "../components/auth.styles";
import { Spacer } from "../../../components/spacer/SpacerComponent";

const AuthScreen = ({ navigation }) => {
  return (
    <BackgroundImage>
      <BackgroundCover />
      <AuthButton
        icon="lock"
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </AuthButton>
      <Spacer position="top" size="large" />
      <AuthButton
        icon="email"
        mode="contained"
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </AuthButton>
    </BackgroundImage>
  );
};

export default AuthScreen;
