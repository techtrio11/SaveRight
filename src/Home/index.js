import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import logo from "../../assets/SaveRight_Logo.png";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      <Text style={styles.text}>
        {" "}
        Use the buttons below to help achieve your saving goals!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "68%",
    height: "40%",
  },
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "#ffffff",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
