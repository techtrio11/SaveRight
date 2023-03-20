import { Wrap } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import logo from "../../assets/SaveRight_Logo.png";
import { useState } from "react";

const SmallGoal = () => {
  const [Price, setPrice] = useState(0);
  const [Wage, setWage] = useState(0);
  const [Answer, setAnswer] = useState(0);
  const [ShowAnswer, setShowAnswer] = useState(false);

  const Calculate = () => {
    setAnswer(Price / Wage);
    setShowAnswer(true);
  };

  return (
    <View
      style={{
        marginTop: "5%",
        flex: 1,
        width: "100%",
        //backgroundColor: "#ccc",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <View
        style={{
          //flex: 0.05,
          flexDirection: "row",
          marginTop: "5%",
        }}
      >
        <Text style={styles.text}>Input name: </Text>
        <TextInput style={styles.input}>Name</TextInput>
      </View>
      <Image
        style={{
          marginTop: "10%",
          width: "40%",
          height: "20%",
        }}
        source={logo}
      />

      <View
        style={{
          //flex: 0.05,
          flexDirection: "row",
        }}
      >
        <Text style={styles.text}>Cost of Item: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setPrice(value);
          }}
        ></TextInput>
      </View>
      <View
        style={{
          //flex: 0.05,
          flexDirection: "row",
          marginTop: "9%",
          justifyContent: "center",
        }}
      >
        <Text style={styles.text}>Hourly Wage: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => {
            setWage(value);
          }}
        ></TextInput>
      </View>
      <View style={{ marginTop: "7%" }}>
        <Pressable
          style={styles.MyButton}
          onPress={() => {
            Calculate();
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Calculate
          </Text>
        </Pressable>
      </View>
      {ShowAnswer && (
        <View style={{ marginTop: "2%" }}>
          <Text>You will need to work {Answer} hours.</Text>
        </View>
      )}
    </View>

    /*<View>
        <Image
          style={{
            position: "relative",
            width: 100,
          }}
          source={logo}
          resizeMode={"cover"}
        />
      </View>
      <View>
        <Text>Hello small goal</Text>
        <TextInput style={styles.input} placeholder="enter name" />
        <Pressable style={styles.MyButton}>
          <Text style={styles.ButtonText}>Enter</Text>
        </Pressable>
        </View> */
  );
};
const styles = StyleSheet.create({
  input: {
    //height: "200%",
    width: "40%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#ccc",
  },
  MyButton: {
    backgroundColor: "#53914c",
    alignItems: "center",
    paddingVertical: "5%",
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: "5%",
  },
  ButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  logo: {
    position: "static",
    width: "25%",
    height: "25%",
  },

  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    //padding: "5 0 5 0",
  },
});

export default SmallGoal;
