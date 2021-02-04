import React from "react";
import { Button, StyleSheet, View } from "react-native";

const ButtonAdd = (props) => {
  return (
    <View style={styles.button}>
      <Button
        disabled={props.isEnabled}
        title={props.text}
        onPress={props.click}
      />
    </View>
  );
};

export default ButtonAdd;

const styles = StyleSheet.create({
  button: {
    width: "25%",
  },
});
