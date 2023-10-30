import * as React from "react";
import Home from "./home";
import NewGoal from "./new_goal";
import UpdateGoal from "./update_goal";
import Graph from "./graph";
import { View, StyleSheet } from "react-native";
import { useState } from "react";

export default function BigGoal({ navigation }) {
  const [pageView, setPageView] = useState("");

  const page = () => {
    if (pageView == "NewGoal") return <NewGoal setPageView={setPageView} />;
    else if (pageView == "UpdateGoal")
      return <UpdateGoal setPageView={setPageView} />;
    else if (pageView == "Graph") return <Graph setPageView={setPageView} />;
    else return <Home setPageView={setPageView} />;
  };
  return <View style={styles.centered}>{page()}</View>;
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
