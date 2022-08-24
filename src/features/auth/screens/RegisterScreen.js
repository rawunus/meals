import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import { AuthContext } from "../../../services/auth/auth.context";
import { Spacer } from "../../../components/spacer/SpacerComponent";
import { Text } from "../../../components/typography/TextComponent";
import {
  BackgroundImage,
  BackgroundCover,
  AuthButton,
  InputContainer,
  InputForm,
} from "../components/auth.styles";
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthContext);
  return (
    <BackgroundImage>
      <BackgroundCover />
      <InputContainer>
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
        <InputForm
          label="Repeat Password"
          mode="outlined"
          textContentType="password"
          autoCapitalize="none"
          value={rePassword}
          secureTextEntry
          onChangeText={(text) => setRePassword(text)}
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
            onPress={() => onRegister(email, password, rePassword)}
            height={50}
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator
            size="large"
            animating={true}
            color={Colors.white800}
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

export default RegisterScreen;
