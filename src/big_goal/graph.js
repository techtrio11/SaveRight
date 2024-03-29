import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
// import { navigation } from "@react-navigation/native";
import { bigGoalReference, db } from "../../FirebaseConfig";
import { onSnapshot, query, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { formatFirebaseDate } from "../Utils/formatDate";
import { LineChart } from "react-native-chart-kit";

export default function Graph({ setPageView }) {
  const [StartDate, setStartDate] = useState(new Date());
  const [MonthsUntilPurchase, setMonthsUntilPurchase] = useState(0);
  const [StartingAmount, setStartingAmount] = useState(0);
  const [TotalCost, setTotalCost] = useState(0);

  const [selected, setSelected] = useState();
  const [data, setData] = useState([]);
  const bigGoalQuery = query(bigGoalReference);

  useEffect(() => {
    onSnapshot(bigGoalQuery, (querySnapshot) => {
      const goals = querySnapshot.docs.map((doc) => {
        const goal = doc.data();
        return { key: doc.id, value: goal.Name };
      });
      setData(goals);
    });
    return;
  }, []);

  useEffect(() => {
    if (selected) {
      const goalRef = doc(db, "BigGoal", selected);
      getDoc(goalRef)
        .then((snapshot) => {
          const data = snapshot.data();
          if (data) {
            setStartDate(new Date(formatFirebaseDate(data.StartDate)));
            setMonthsUntilPurchase(data.MonthsUntilPurchase);
            setStartingAmount(data.StartingAmount);
            setTotalCost(data.TotalCost);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    return;
  }, [selected]);

  const SavingsPerMonth = (TotalCost - StartingAmount) / MonthsUntilPurchase;
  let dataArray = [];
  let newTotal = 0;
  for (var i = 0; i < MonthsUntilPurchase; i++) {
    newTotal = newTotal + SavingsPerMonth;
    dataArray.push(newTotal);
  }
  const LabelMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let LabelArray = [];
  const StartMonth = StartDate.getMonth();
  for (var i = 0; i < MonthsUntilPurchase; i++) {
    if (i + StartMonth < 12) {
      LabelArray.push(LabelMonths[i + StartMonth]);
    } else {
      LabelArray.push(LabelMonths[i - (12 - StartMonth)]);
    }
  }

  return (
    <ScrollView>
      <View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5, flex: 1 }}>
          <SelectList data={data} setSelected={setSelected} />
        </View>
        {selected && (
          <>
            <View
              style={{
                alignItems: "center",
                padding: 5,
              }}
            >
              <Text style={styles.label}>
                You will need to save ${SavingsPerMonth.toFixed(2)} for{" "}
                {MonthsUntilPurchase} months.
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                padding: 0,
              }}
            >
              <Text style={styles.label}>
                Start Date: {StartDate.getMonth()}/{StartDate.getDay()}/
                {StartDate.getFullYear()}
              </Text>
              <Text style={styles.label}>
                Starting Amount: ${StartingAmount}
              </Text>
              <Text style={styles.label}>Total Cost: ${TotalCost}</Text>
            </View>
            <LineChart
              data={{
                labels: LabelArray,
                datasets: [
                  {
                    data: dataArray,
                  },
                ],
              }}
              width={Dimensions.get("window").width} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisSuffix=""
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#32a850",
                backgroundGradientFrom: "#32a850",
                backgroundGradientTo: "#3bdb64",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#0b6e24",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </>
        )}
        <Pressable style={styles.button} onPress={() => setPageView("Home")}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

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
