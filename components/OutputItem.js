import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const OutputItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.1} onPress={props.delete}>
      <View style={styles.output}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OutputItem;

const styles = StyleSheet.create({
  output: {
    marginBottom: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 7,
  },
});
