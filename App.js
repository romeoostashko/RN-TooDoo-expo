import React, { useState } from "react";
import OutputContainer from "./components/OutputContainer";
import InputContainer from "./components/InputContainer";
import { StyleSheet, View, Button } from "react-native";

export default function App() {
  const [outputs, setOutputs] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addHandler = (enterText, setEnterText, setEnabled) => {
    setOutputs((outputs) => [...outputs, enterText]);
    setEnterText("");
    setEnabled(false);
    setIsAddModal(false);
  };

  const deleteItem = (id) => {
    setOutputs((currOutputs) => {
      return currOutputs.filter((item, ind) => ind !== id);
    });
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add note"
        onPress={() => {
          setIsAddModal(true);
        }}
      />
      <InputContainer
        isAddModal={isAddModal}
        placeholder={"Enter text"}
        addHandler={addHandler}
        textButton="ADD"
      />
      <OutputContainer delete={deleteItem} outputs={outputs} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
