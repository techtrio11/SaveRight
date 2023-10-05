//needs start point, end point and total time
import * as React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { object, string, number } from "yup";
import { bigGoalReference } from "../../FirebaseConfig";
import { addDoc } from "firebase/firestore";
import { useFormik } from "formik";

export default function NewGoal({ setPageView }) {
  const bigGoalValidation = object().shape({
    Name: string().required("Name is Required"),
    StartingAmount: number()
      .min(1, "Must be more then 1")
      .required("Starting Amount is Required"),
    TotalCost: number()
      .min(1, "Must be more then 1")
      .required("Total Cost is Required"),
    MonthsUntilPurchase: number()
      .min(1, "Must be between 1 and 12")
      .max(12, "Must be between 1 and 12")
      .required("Months Until Purchase is Required"),
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        Name: "",
        StartingAmount: "",
        TotalCost: "",
        MonthsUntilPurchase: "",
      },
      validationSchema: bigGoalValidation,
      onSubmit: (values) => {
        addDoc(bigGoalReference, {
          Name: values.Name,
          StartingAmount: values.StartingAmount,
          TotalCost: values.TotalCost,
          StartDate: new Date(),
          MonthsUntilPurchase: values.MonthsUntilPurchase,
        })
          .then(() => {
            setPageView("");
          })
          .catch((err) => console.log(err));
      },
    });
  return (
    <View style={styles.centered}>
      <Text style={styles.Text}>Name of Goal:</Text>
      <TextInput
        value={values.Name}
        style={styles.input}
        onChangeText={handleChange("Name")}
        onBlur={handleBlur("Name")}
      ></TextInput>
      {errors.Name && touched.Name && (
        <Text style={styles.errorMessage}>{errors.Name}</Text>
      )}
      <Text style={styles.Text}>Months Until Purchase:</Text>
      <TextInput
        keyboardType="number-pad"
        returnKeyLabel="Done"
        value={values.MonthsUntilPurchase}
        style={styles.input}
        onChangeText={handleChange("MonthsUntilPurchase")}
        onBlur={handleBlur("MonthsUntilPurchase")}
      ></TextInput>
      {errors.MonthsUntilPurchase && touched.MonthsUntilPurchase && (
        <Text style={styles.errorMessage}>{errors.MonthsUntilPurchase}</Text>
      )}
      <Text style={styles.Text}>Starting Amount:</Text>
      <TextInput
        keyboardType="number-pad"
        returnKeyLabel="Done"
        value={values.StartingAmount}
        style={styles.input}
        onChangeText={handleChange("StartingAmount")}
        onBlur={handleBlur("StartingAmount")}
      ></TextInput>
      {errors.StartingAmount && touched.StartingAmount && (
        <Text style={styles.errorMessage}>{errors.StartingAmount}</Text>
      )}
      <Text style={styles.Text}>Total Cost:</Text>
      <TextInput
        keyboardType="number-pad"
        returnKeyLabel="Done"
        value={values.TotalCost}
        style={styles.input}
        onChangeText={handleChange("TotalCost")}
        onBlur={handleBlur("TotalCost")}
      ></TextInput>
      {errors.TotalCost && touched.TotalCost && (
        <Text style={styles.errorMessage}>{errors.TotalCost}</Text>
      )}
      <Pressable style={styles.Button} onPress={() => handleSubmit()}>
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
  errorMessage: {
    color: "red",
  },
});
