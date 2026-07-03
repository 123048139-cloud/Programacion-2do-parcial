import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuScreen from "./screens/MenuScreen";
import TarjetasScreen from "./screens/TarjetasScreen";
import SafeAreaScreen from "./screens/SafeAreaScreen";
import PressableScreen from "./screens/PressableScreen";
import TextInputScreen from "./screens/TextInputScreen";
import ActivityIndicatorScreen from "./screens/ActivityIndicatorScreen";
import ImageBackgroundScreen from "./screens/ImageBackgroundScreen";
import FlatListSectionList from "./screens/FlatListSectionList";
import ModalScreen from "./screens/ModalScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: "Componentes React Native" }}
        />
        <Stack.Screen name="Tarjetas" component={TarjetasScreen} />
        <Stack.Screen name="SafeArea" component={SafeAreaScreen} />
        <Stack.Screen name="Pressable" component={PressableScreen} />
        <Stack.Screen name="TextInput" component={TextInputScreen} />
        <Stack.Screen
          name="ActivityIndicator"
          component={ActivityIndicatorScreen}
        />
        <Stack.Screen
          name="ImageBackground"
          component={ImageBackgroundScreen}
        />
        <Stack.Screen name="FlatList" component={FlatListSectionList} />
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
