import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text style={styles.title}> Title 1 </Text>
      <Text>Paragraph 1</Text>
      <Text> </Text>
      <Text style={styles.title}> Title 2 </Text>
      <Text>Paragraph 2</Text>
      <Text> </Text>
      <Text style={styles.title}> Title 3 </Text>
      <Text>Paragraph 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
