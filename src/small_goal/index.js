/*This is a test */
import { addDoc } from "firebase/firestore";
import { useFormik } from "formik";
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
import { NavigationContainer } from "@react-navigation/native";

export const smallGoalValidation = object().shape({
  priceField: string().required("Price is Required"),
  wageField: string().required("Wage is Required"),
  nameField: string().required("Name is Required"),
});
const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
  useFormik({
    initialValues: {
      priceField: "",
      wageField: "",
      nameField: "",
    },
    validationSchema: formNameValidation,
    onSubmit: (values) => {
      addDoc(firebaseReference, {
        firebaseFieldName: values.priceField,
        firebaseFieldName: values.wageField,
        firebaseFieldName: values.nameField,
      })
        .then(() => {
          //success, do something?
        })
        .catch((err) => console.log(err));
    },
  });

const SmallGoal = ({ navigation }) => {
  const [Price, setPrice] = useState(0);
  const [Wage, setWage] = useState(0);
  const [Answer, setAnswer] = useState(0);
  const [ShowAnswer, setShowAnswer] = useState(false);
  const [Name, setName] = useState(false);
  const [ShowEnterName, setShowEnterName] = useState(true);
  const [ShowName, setShowName] = useState(false);
  const [ResetButton, setResetButton] = useState(false);
  const [CalculateButton, setCalculateButton] = useState(true);

  const Calculate = () => {
    setAnswer(Price / Wage);
    setShowAnswer(true);
    setShowEnterName(false);
    setShowName(true);
    setResetButton(true);
    setCalculateButton(false);
    console.log(Name);
  };

  const Reset = () => {
    setShowAnswer(false);
    setShowEnterName(true);
    setShowName(false);
    setResetButton(false);
    setCalculateButton(true);
  };

  return (
    <View
      style={{
        marginTop: "5%",
        flex: 1,
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: "5%",
        }}
      >
        {ShowEnterName && (
          <View>
            <Text style={styles.text}>Input name: </Text>

            <TextInput
              style={styles.input}
              onChangeText={handleChange("nameField")}
              onBlur={handleBlur("nameField")}
              onChangeText={(value) => {
                setName(value);
              }}
            >
              {errors.state && (
                <Text style={formStyles.errorMessage}>
                  {errors.vehicleName}
                </Text>
              )}
              Name
            </TextInput>
          </View>
        )}
      </View>
      <View>
        {ShowName && (
          <View style={{ marginTop: "2%" }}>
            <Text style={styles.name}>{Name}</Text>
          </View>
        )}
      </View>

      <Image style={styles.image} source={logo} />

      <View
        style={{
          //flex: 1,
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
      {CalculateButton && (
        <View style={{ marginTop: "7%" }}>
          <Pressable
            style={styles.MyButton}
            onPress={() => {
              Calculate();
            }}
          >
            <Text style={styles.ButtonText}>Calculate</Text>
          </Pressable>
        </View>
      )}
      {ResetButton && (
        <View style={{ marginTop: "7%" }}>
          <Pressable
            style={styles.MyButton}
            onPress={() => {
              Reset();
            }}
          >
            <Text style={styles.ButtonText}>Reset</Text>
          </Pressable>
        </View>
      )}
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
    fontSize: 20,
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

  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },

  image: {
    marginTop: "10%",
    width: "40%",
    height: "20%",
  },
});

export default SmallGoal;
