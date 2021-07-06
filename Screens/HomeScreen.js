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

const HomeScreen = ({ navigation }) => {
  console.log("App executed");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ marginTop: 50 }}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.inputTextBlack}>Back</Text>
        </TouchableOpacity>
        <Text>Hello world!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flex: 1,
  },
});

export default HomeScreen;
