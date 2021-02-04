import React, { useState } from "react";
import { View, TextInput, StyleSheet, Modal } from "react-native";
import ButtonAdd from "./ButtonAdd";

const InputContainer = (props) => {
  const inputHandler = (text) => {
    if (text.length > 0) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
    setEnterText(text);
  };

  const [enterText, setEnterText] = useState("");

  const [isEnabled, setEnabled] = useState(false);

  return (
    <Modal visible={props.isAddModal} animationType="slide" transparent={true}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={props.placeholder}
            style={styles.input}
            onChangeText={inputHandler}
            value={enterText}
          />
          <ButtonAdd
            isEnabled={!isEnabled}
            text={props.textButton}
            click={props.addHandler.bind(
              this,
              enterText,
              setEnterText,
              setEnabled
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: "#ccc",
    borderTopColor: "black",
    width: "70%",
    marginBottom: 10,
  },
  inputContainer: {
    elevation: 5,
    width: 300,
    height: 150,
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",

    justifyContent: "center",
    alignItems: "center",
  },
});
