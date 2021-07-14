import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Animated,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { Input } from "react-native-elements";
import { SocialIcon } from "react-native-elements/dist/social/SocialIcon";
import { auth } from "../firebase";

const SignInScreen = ({ navigation }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("HomeScreen");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(state.email, state.password)
      .catch((error) => alert(error));
  };

  // state = {
  //   fadeAnim: new Animated.Value(0),
  // };

  // componentDidMount() {
  //   Animated.spring(this.state.fadeAnim, {
  //     toValue: 1,
  //     tension: 10,
  //     friction: 2,
  //     duration: 3000,
  //     useNativeDriver: false,
  //   }).start();
  // }

  // render() {
  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          {/* <View style={styles.container}> */}
          {/* <Animated.View
          style={[
            styles.header,
            {
              opacity: this.state.fadeAnim,
              top: this.state.fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ]}
        >
          <Image
            style={{ resizeMode: "center" }}
            source={require("../assets/Logo.png")}
          />
        </Animated.View> */}
          <View style={styles.header}>
            <Image
              style={{ resizeMode: "center", position: "relative" }}
              source={require("../assets/Logo.png")}
            />
          </View>
          <View>
            <Text style={styles.headerText}>Sign In</Text>
            <View style={{ marginTop: 15 }}>
              {/* <View style={styles.textInput}>
              <TextInput
                style={{ width: "100%" }}
                placeholder="Email"
                autoCapitalize="none"
              ></TextInput>
              <Ionicons
                style={{ alignItems: "flex-start" }}
                name="md-checkmark"
                color="#33C759"
                size={20}
              ></Ionicons>
            </View>
            <View style={styles.textInput}>
              <TextInput
                style={{ width: "100%" }}
                placeholder="Password"
                autoCapitalize="none"
              ></TextInput>
              <Ionicons
                name="md-checkmark"
                color="#33C759"
                size={20}
              ></Ionicons>
            </View> */}
              <Input
                placeholder="Email"
                autoFocus
                type="email"
                value={state.email}
                onChangeText={(value) => setState({ ...state, email: value })}
              ></Input>
              <Input
                placeholder="Password"
                autoFocus
                secureTextEntry
                type="password"
                value={state.password}
                onChangeText={(value) =>
                  setState({ ...state, password: value })
                }
              ></Input>
              <Text
                style={{ marginTop: 5, color: "#525252", fontWeight: "bold" }}
                onPress={() => {
                  navigation.navigate("ForgotPassword");
                }}
              >
                Forgot Password?
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                style={styles.defaultButton}
                onPress={() => {
                  navigation.push("HomeScreen");
                }}
              >
                <Text style={styles.inputTextWhite}>DEV Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.defaultButton} onPress={signIn}>
                <Text style={styles.inputTextWhite}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 20 }}>
                <SocialIcon
                  style={styles.appleButton}
                  title="Sign In With Apple"
                  button
                  type="apple"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <SocialIcon
                  style={styles.googleButton}
                  title="Sign In With Google"
                  light
                  button
                  type="google"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <SocialIcon
                  style={styles.facebookButton}
                  title="Sign In With Facebook"
                  button
                  type="facebook"
                />
              </TouchableOpacity>
              <Text style={{ marginVertical: 10, color: "#525252" }}>
                Don't Have An Account?
              </Text>
              <TouchableOpacity
                style={styles.defaultButton}
                onPress={() => {
                  navigation.push("SignUp");
                }}
              >
                <Text style={styles.inputTextWhite}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </View> */}
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
  // }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fff",
  },

  defaultButton: {
    marginTop: 5,
    alignItems: "center",
    backgroundColor: "#33C759",
    paddingVertical: 12,
    borderRadius: 15,
    elevation: 3,
  },

  appleButton: {
    backgroundColor: "#000",
    borderRadius: 15,
    elevation: 3,
    marginHorizontal: 0,
  },

  googleButton: {
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 3,
    marginHorizontal: 0,
  },

  facebookButton: {
    backgroundColor: "#007AFF",
    borderRadius: 15,
    elevation: 3,
    marginHorizontal: 0,
  },

  header: {
    flex: 1,
    alignItems: "center",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 30,
  },

  inputTextWhite: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  inputTextBlack: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
  },

  textInput: {
    marginTop: 15,
    width: "100%",
    flexDirection: "row",
    borderBottomColor: "#ABABAB",
    borderBottomWidth: 1,
  },
});

export default SignInScreen;
