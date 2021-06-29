import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Landing() {
  console.log("App executed");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/Logo.png")} resizeMode="center" />
      </View>
      <View style={styles.footer}>
        <Text style={{ color: "white" }}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#33C759",
    width: "100%",
  },
});

export default Landing;
