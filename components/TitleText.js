import React from "react";
import { StyleSheet, Text } from "react-native";

const TitleText = ({ children, style }) => {
  return <Text style={{ ...style, ...styles.title }}>{children}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
