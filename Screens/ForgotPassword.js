import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

const SignUpScreen = ({ navigation }) => {
  console.log("App executed");

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.inputTextBlack}>Back</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerText}>Forgot Password</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            autoCapitalize="none"
          ></TextInput>
          <TouchableOpacity style={styles.defaultButton}>
            <Text style={styles.inputTextWhite}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 40,
  },

  defaultButton: {
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
    marginTop: 15,
    alignItems: "flex-start",
    borderBottomColor: "#ABABAB",
    borderBottomWidth: 1,
  },
});

export default SignUpScreen;
