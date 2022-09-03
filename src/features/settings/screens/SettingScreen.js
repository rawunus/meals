import { Button, TouchableOpacity } from "react-native";
import React, { useState, useContext, useCallback } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { List, Avatar } from "react-native-paper";
import { AuthContext } from "../../../services/auth/auth.context";

import { SafeArea } from "../../../components/utility/SafeAreaViewComponent";
import { Spacer } from "../../../components/spacer/SpacerComponent";
import { Text } from "../../../components/typography/TextComponent";
import FadeAnimation from "../../components/animations/FadeAnimation";

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;
const AvatarWrapper = styled.View`
  align-items: center;
`;
const SettingScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const { user, onLogout } = useContext(AuthContext);

  const getProfileImage = async (currentUser) => {
    const imageUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(imageUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfileImage(user);
    }, [user, getProfileImage])
  );

  return (
    <SafeArea>
      <FadeAnimation>
        <AvatarWrapper>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && (
              <Avatar.Icon size={160} icon="human" backgroundColor="#2182BD" />
            )}
            {photo && (
              <Avatar.Image
                size={160}
                source={{ uri: photo }}
                backgroundColor="#2182BD"
              />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large" />
          <Text variant="caption">{user.email}</Text>
        </AvatarWrapper>
        <List.Section>
          <SettingItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <SettingItem
            title="Logout"
            left={(props) => (
              <List.Icon {...props} color="black" icon="logout" />
            )}
            onPress={onLogout}
          />
        </List.Section>
        <List.Section>
          <List.Item>
            <Text>Favourites</Text>
          </List.Item>
          <List.Item>
            <Button title="Logout" onPress={() => onLogout()} />
          </List.Item>
        </List.Section>
      </FadeAnimation>
    </SafeArea>
  );
};

export default SettingScreen;
