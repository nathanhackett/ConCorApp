import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./Landing";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const rootStack = createStackNavigator();

const RootScreens = ({ navigation }) => (
  <rootStack.Navigator screenOptions={{ headerShown: false }}>
    <rootStack.Screen name="Landing" component={Landing} />
    <rootStack.Screen name="SignIn" component={SignInScreen} />
    <rootStack.Screen name="SignUp" component={SignUpScreen} />
  </rootStack.Navigator>
);

export default RootScreens;
