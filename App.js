import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RootScreens from "./Screens/RootScreens";

import HomeScreen from "./Screens/HomeScreen";
import Splash from "./Screens/Landing";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootScreens />
      {/* <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Splash} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
