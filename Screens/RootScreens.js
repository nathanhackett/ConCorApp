import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./Landing";
import SignInScreen from "./SignInScreen";
import ForgotPassword from "./ForgotPassword";
import SignUpScreen from "./SignUpScreen";
import HomeScreen from "./HomeScreen";

const rootStack = createStackNavigator();

const RootScreens = ({ navigation }) => (
  <rootStack.Navigator screenOptions={{ headerShown: false }}>
    {/* <rootStack.Screen name="Landing" component={Landing} /> */}
    <rootStack.Screen name="SignIn" component={SignInScreen} />
    <rootStack.Screen name="ForgotPassword" component={ForgotPassword} />
    <rootStack.Screen name="SignUp" component={SignUpScreen} />
    <rootStack.Screen name="HomeScreen" component={HomeScreen} />
  </rootStack.Navigator>
);

export default RootScreens;
