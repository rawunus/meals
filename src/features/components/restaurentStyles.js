import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";

export const CardItem = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  position: relative;
  z-index: -1;
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled(View)`
  flex-direction: row;
  height: ${(props) => props.theme.sizes[2]};
`;

export const Rating = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Open = styled(View)`
  flex: 1;
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
