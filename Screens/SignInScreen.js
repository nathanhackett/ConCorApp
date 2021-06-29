import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SocialIcon } from "react-native-elements/dist/social/SocialIcon";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

function SignInScreen() {
  console.log("App executed");

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../assets/Logo.png")} resizeMode="center" />
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Sign In</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
            ></TextInput>
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              autoCapitalize="none"
            ></TextInput>
            <Text style={{ marginTop: 5, color: "#525252" }}>
              Forgot Password?
            </Text>
          </View>
          <View style={styles.input}>
            <TouchableOpacity style={styles.defaultButton}>
              <Text style={styles.inputTextWhite}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 5 }}>
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
            <Text style={{ marginVertical: 5, color: "#525252" }}>
              Dont Have An Account?
            </Text>
            <TouchableOpacity style={styles.defaultButton}>
              <Text style={styles.inputTextWhite}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 40,
  },

  defaultButton: {
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

  footer: {
    flex: 3,
    justifyContent: "center",
  },

  input: {
    marginTop: 15,
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
    alignItems: "flex-start",
    borderBottomColor: "#ABABAB",
    borderBottomWidth: 1,
    width: "100%",
  },
});

export default SignInScreen;
