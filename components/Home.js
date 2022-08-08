import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch, Button } from "react-native";

export default function Home(props) {
  const [toggle, setToggle] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ color: toggle ? "red" : "black" }}>
        {toggle ? "Goodbye" : "Hello"} World
      </Text>
      <StatusBar style="auto" />
      <Switch onValueChange={() => setToggle(!toggle)} value={toggle} />
      <Button
        title="ABOUT"
        onPress={() => props.navigation.navigate("About")}
      />
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
