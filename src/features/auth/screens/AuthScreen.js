import React from "react";
import Lottie from "lottie-react-native";

import {
  BackgroundImage,
  BackgroundCover,
  AuthButton,
  AnimationWrapper,
  Title,
} from "../components/auth.styles";
import { Spacer } from "../../../components/spacer/SpacerComponent";
import FadeAnimation from "../../components/animations/FadeAnimation";

const AuthScreen = ({ navigation }) => {
  return (
    <BackgroundImage>
      <BackgroundCover />
      <AnimationWrapper>
        <Lottie
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <FadeAnimation>
        <Spacer size="large" />
        <Title>Meals To Go</Title>
        <Spacer size="large" />
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
      </FadeAnimation>
    </BackgroundImage>
  );
};

export default AuthScreen;
