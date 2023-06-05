//needs start point, end point and total time
import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function NewGoal({ setPageView }) {
  return (
    <View style={styles.centered}>
      <Text style={styles.Text}>Name of Goal:</Text>
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
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: "5%",
    marginBottom: "10%",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    width: "40%",
    marginLeft: "30%",
    justifyContent: "center",
  },

  Text: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 16,
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
    width: "40%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#ccc",
  },
});
