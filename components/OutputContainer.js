import React from "react";
import OutputItem from "./OutputItem";
import { FlatList, StyleSheet } from "react-native";

const OutputContainer = (props) => {
  return (
    <FlatList
      keyExtractor={(item) => Math.random().toString()}
      data={props.outputs}
      style={styles.scroll}
      renderItem={(itemData) => (
        <OutputItem
          delete={props.delete.bind(this, itemData.index)}
          title={itemData.item}
        />
      )}
    />
  );
};

export default OutputContainer;

const styles = StyleSheet.create({
  scroll: {
    marginTop: 50,
    marginBottom: 50,
  },
});
