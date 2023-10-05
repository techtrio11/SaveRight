import * as React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

//import DropdownMenu from "react-native-dropdown-menu";

export default function Home({ setPageView }) {
  return (
    <View style={styles.centered}>
      <View>
        <Text style={styles.Text}>
          If you would like to create a new savings goal, click the button
          below.
        </Text>
        <Pressable style={styles.Button} onPress={() => setPageView("NewGoal")}>
          <Text style={styles.ButtonText}>New Goal</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.Text}>
          If you would like to view a savings goal, click the button below.
        </Text>
        <Pressable style={styles.Button} onPress={() => setPageView("Graph")}>
          <Text style={styles.ButtonText}>View Goal</Text>
        </Pressable>
      </View>
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
});
