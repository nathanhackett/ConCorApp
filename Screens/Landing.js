import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function Landing() {
  console.log("App executed");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
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
});

export default Landing;
