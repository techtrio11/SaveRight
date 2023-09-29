//needs start point, end point and total time
import * as React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { object, string } from "yup";
import { bigGoalReference } from "../../FirebaseConfig";
import { addDoc } from "firebase/firestore";
import { useFormik } from "formik";

export default function NewGoal({ setPageView }) {
  const bigGoalValidation = object().shape({
    Name: string().required("Name is Required"),
    StartingAmount: string().required("Starting Amount is Required"),
    TotalCost: string().required("Total Cost is Required"),
    PurchaseDate: string().required("Purchase Date is Required"),
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
      Name: "",
      StartingAmount: "",
      TotalCost: "",
      PurchaseDate: "",
    },
    validationSchema: bigGoalValidation,
    onSubmit: (values) => {
      addDoc(bigGoalReference, {
        Name: values.Name,
        StartingAmount: values.StartingAmount,
        TotalCost: values.TotalCost,
        StartDate: new Date(),
        MonthsUntilPurchase: 0,
      })
        .then(() => {
          //setPageView("Graph");
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
      {errors.name && (
        <Text style={formStyles.errorMessage}>{errors.name}</Text>
      )}
      <Text style={styles.Text}>Purchase Date:</Text>
      <TextInput
        value={values.PurchaseDate}
        style={styles.input}
        onChangeText={handleChange("PurchaseDate")}
        onBlur={handleBlur("PurchaseDate")}
      ></TextInput>
      {errors.PurchaseDate && (
        <Text style={formStyles.errorMessage}>{errors.PurchaseDate}</Text>
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
      {errors.StartingAmount && (
        <Text style={formStyles.errorMessage}>{errors.StartingAmount}</Text>
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
      {errors.TotalCost && (
        <Text style={formStyles.errorMessage}>{errors.TotalCost}</Text>
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
});
