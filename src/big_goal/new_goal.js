//needs start point, end point and total time
import * as React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";

export default function NewGoal({ setPageView }) {
  return (
    <View style={styles.centered}>
      <Text style={styles.Text}>Name of Goal:</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.Text}>Purchase Date:</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.Text}>Starting Amount:</Text>
      <TextInput
        keyboardType="number-pad"
        returnKeyLabel="Done"
        returnKeyType="done"
        style={styles.input}
      ></TextInput>
      <Text style={styles.Text}>Total Cost:</Text>
      <TextInput
        keyboardType="number-pad"
        returnKeyLabel="Done"
        returnKeyType="done"
        style={styles.input}
      ></TextInput>
      <Pressable style={styles.Button} onPress={() => setPageView("Graph")}>
        <Text style={styles.ButtonText}>Submit</Text>
      </Pressable>
      <Pressable style={styles.Button} onPress={() => setPageView("")}>
        <Text style={styles.ButtonText}>Cancel</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#53914c",
    alignItems: "center",
    paddingVertical: "5%",
    padding: 10,
    borderRadius: 10,
    marginTop: "5%",
    marginBottom: "10%",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    width: "40%",
    // marginLeft: "5%",
    // justifyContent: "center",
  },

  Text: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 25,
    justifyContent: "center",
    marginLeft: "15%",
    marginRight: "15%",
    //height: "20%",
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  centered: {
    marginTop: "5%",
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
  },
  input: {
    width: "50%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#ccc",
  },
});
