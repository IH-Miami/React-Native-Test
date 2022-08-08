import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch, Pressable } from "react-native";

export default function About({ navigation }) {
  const [toggle, setToggle] = React.useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={{ color: toggle ? "red" : "black" }}>
          This is the about page
        </Text>
        <StatusBar style="auto" />
      </Pressable>
      {/* <Switch onValueChange={() => setToggle(!toggle)} value={toggle} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#888",
    alignItems: "center",
    justifyContent: "center",
  },
});
