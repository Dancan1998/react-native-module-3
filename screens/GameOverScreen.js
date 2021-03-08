import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});