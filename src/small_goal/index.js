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
import { object, string } from "yup";
import { smallGoalReference } from "../../FirebaseConfig";

const SmallGoal = ({ navigation }) => {
  const [Answer, setAnswer] = useState(0);
  const [ShowAnswer, setShowAnswer] = useState(false);
  const [ShowEnterName, setShowEnterName] = useState(true);
  const [ShowName, setShowName] = useState(false);
  const [ResetButton, setResetButton] = useState(false);
  const [CalculateButton, setCalculateButton] = useState(true);

  const Calculate = () => {
    setAnswer(values.price / values.wage);
    setShowAnswer(true);
    setShowEnterName(false);
    setShowName(true);
    setResetButton(true);
    setCalculateButton(false);
  };

  const Reset = () => {
    setShowAnswer(false);
    setShowEnterName(true);
    setShowName(false);
    setResetButton(false);
    setCalculateButton(true);
    resetForm();
  };

  const smallGoalValidation = object().shape({
    price: string().required("Price is Required"),
    wage: string().required("Wage is Required"),
    name: string().required("Name is Required"),
  });
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      price: "",
      wage: "",
      name: "",
      answer: "",
    },
    validationSchema: smallGoalValidation,
    onSubmit: () => {},
  });

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} />
      {ShowEnterName && (
        <View style={styles.formContainer}>
          <Text style={styles.label}>Input name: </Text>
          <TextInput
            value={values.name}
            style={styles.input}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
          />
          {errors.name && touched.name && (
            <Text style={styles.errorMessage}>{errors.name}</Text>
          )}
        </View>
      )}
      {ShowName && (
        <View>
          <Text style={styles.name}>{values.name}</Text>
        </View>
      )}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Cost of Item: </Text>
        <TextInput
          value={values.price}
          style={styles.input}
          onChangeText={handleChange("price")}
          onBlur={handleBlur("price")}
        />
        {errors.price && touched.price && (
          <Text style={styles.errorMessage}>{errors.price}</Text>
        )}
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Hourly Wage: </Text>
        <TextInput
          value={values.wage}
          style={styles.input}
          onChangeText={handleChange("wage")}
          onBlur={handleBlur("wage")}
        />
        {errors.wage && touched.wage && (
          <Text style={styles.errorMessage}>{errors.wage}</Text>
        )}
      </View>
      {CalculateButton && (
        <View>
          <Pressable
            style={styles.button}
            onPress={() => {
              Calculate();
            }}
          >
            <Text style={styles.buttonText}>Calculate</Text>
          </Pressable>
        </View>
      )}
      {ResetButton && (
        <>
          <View>
            <Pressable
              style={styles.button}
              onPress={() => {
                Reset();
              }}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
          </View>
        </>
      )}
      {ShowAnswer && (
        <View>
          <Text style={styles.label}>
            You will need to work {Answer.toFixed(2)} hours.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "#ffffff",
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: "50%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#53914c",
    alignItems: "center",
    paddingVertical: "5%",
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: "5%",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    paddingTop: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  image: {
    width: "68%",
    height: "40%",
  },
  errorMessage: {
    color: "red",
  },
});

export default SmallGoal;
