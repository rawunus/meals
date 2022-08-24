import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const BackgroundImage = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  align-items: center;
  justify-content: center;
`;

export const BackgroundCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const AuthButton = styled(Button).attrs({
  backgroundColor: colors.brand.primary,
  color: colors.brand.primary,
})`
  align-items: center;
  justify-content: center;
  width: auto;
`;

export const InputContainer = styled.View`
  flex: 1;
  justify-content: center;
  height: auto;
  width: 100%;
  padding: 20px;
`;
export const InputForm = styled(TextInput).attrs({})`
  height: 50px;
`;
