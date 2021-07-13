import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./Landing";
import SignInScreen from "./SignInScreen";
import ForgotPassword from "./ForgotPassword";
import SignUpScreen from "./SignUpScreen";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const RootScreens = ({ navigation }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* <rootStack.Screen name="Landing" component={Landing} /> */}
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

export default RootScreens;
