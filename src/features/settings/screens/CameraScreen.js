import { Camera } from "expo-camera";
import { useState, useRef, useContext } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "../../../services/auth/auth.context";

const CameraProfile = styled(Camera)`
  width: 100%;
  height: 100%;
`;
const TakePicture = styled(TouchableOpacity)`
  background-color: rgba(255, 255, 255, 0.6);
  width: 70px;
  height: 70px;
  border-radius: 50px;
  border-color: rgba(255, 255, 255, 0.2);
  border-width: 3px;
  position: absolute;
  align-self: center;
  bottom: 30px;
`;

const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  // function toggleCameraType() {
  //   setType((current) =>
  //     current === CameraType.back ? CameraType.front : CameraType.back
  //   );
  // }

  return (
    <CameraProfile
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
      ratio={"16:9"}
    >
      <TakePicture onPress={snap} />
    </CameraProfile>
  );
};

export default CameraScreen;
