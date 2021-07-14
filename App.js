// @refresh reset
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootScreens from "./Screens/RootScreens";

import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);

function App() {
  return (
    <NavigationContainer>
      <RootScreens />
    </NavigationContainer>
  );
}

export default App;
