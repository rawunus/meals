import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { AuthContext } from "../../../services/auth/auth.context";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Spacer } from "../../../components/spacer/SpacerComponent";
import { Text } from "../../../components/typography/TextComponent";
import {
  BackgroundImage,
  BackgroundCover,
  AuthButton,
  InputContainer,
  InputForm,
  Title,
} from "../components/auth.styles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(AuthContext);

  return (
    <BackgroundImage>
      <BackgroundCover />

      <InputContainer>
        <Spacer size="large" />
        <Title>SIgn In</Title>
        <Spacer size="large" />
        <InputForm
          label="Email"
          mode="outlined"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Spacer position="bottom" size="large" />
        <InputForm
          label="Password"
          mode="outlined"
          textContentType="password"
          autoCapitalize="none"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Spacer position="bottom" size="large" />
        {error && (
          <Spacer position="bottom" size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        {!isLoading ? (
          <AuthButton
            icon="lock"
            mode="contained"
            onPress={() => onLogin(email, password)}
            height={50}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator
            size="large"
            animating={true}
            color={Colors.gray800}
          />
        )}
        <Spacer position="bottom" size="large" />
        <AuthButton
          icon="arrow-left"
          mode="contained"
          onPress={() => navigation.goBack()}
          height={50}
        >
          Back
        </AuthButton>
      </InputContainer>
    </BackgroundImage>
  );
};

export default LoginScreen;
