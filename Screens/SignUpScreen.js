import "react-native-gesture-handler";
import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import { auth } from "../firebase";

const SignUpScreen = ({ navigation }) => {
  console.log("App executed");

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    //confirmPassword: "",
  });

  // useLayoutEffect(() => {
  //   navigation.setOptions({

  //   })
  // }, [navigation]);

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(state.email, state.password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: state.name,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    // <ScrollView>
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.inputTextBlack}>Back</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create Profile</Text>
        <Ionicons
          style={styles.profileImage}
          name="person-outline"
          size={100}
          color="gray"
        ></Ionicons>
        <View>
          <TouchableOpacity>
            <Ionicons
              style={styles.addCircleOutline}
              name="add-circle-outline"
              size={50}
              color="black"
            ></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textInput}>
        <Input
          placeholder="Name"
          autoFocus
          value={state.name}
          onChangeText={(value) => setState({ ...state, name: value })}
        ></Input>
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
          onChangeText={(value) => setState({ ...state, password: value })}
        ></Input>
      </View>
      <TouchableOpacity style={styles.defaultButton} onPress={signUp}>
        <Text style={styles.inputTextWhite}>Sign Up</Text>
      </TouchableOpacity>
      <View style={{ height: 50 }}></View>
    </KeyboardAvoidingView>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    backgroundColor: "#fff",
  },
  defaultButton: {
    width: 300,
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#33C759",
    paddingVertical: 12,
    borderRadius: 15,
    elevation: 3,
  },

  addCircleOutline: {
    marginTop: 0,
    position: "relative",
    top: -100,
  },

  profileImage: {
    marginTop: 10,
    backgroundColor: "#cccccc",
    borderRadius: 100,
    padding: 20,
  },

  header: {
    marginTop: 50,
    alignItems: "center",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 30,
  },

  footer: {
    justifyContent: "center",
    backgroundColor: "#fff",
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
    width: 300,
    alignItems: "flex-start",
  },
});

export default SignUpScreen;
