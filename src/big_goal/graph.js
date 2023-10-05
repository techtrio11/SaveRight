import { LineChart } from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";
import { bigGoalReference, db } from "../../FirebaseConfig";
import { onSnapshot, query, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { formatFirebaseDate } from "../Utils/formatDate";

export default function Graph(bigGoalId) {
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
    <View>
      <View style={{ paddingHorizontal: 20, paddingVerticle: 50, flex: 1 }}>
        <SelectList data={data} setSelected={setSelected} />
      </View>
      {selected && (
        <>
          <View
            style={{
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text>
              You will need to save ${SavingsPerMonth.toFixed(2)} for{" "}
              {MonthsUntilPurchase} months.
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text>
              Start Date: {StartDate.getMonth()}/{StartDate.getDay()}/
              {StartDate.getFullYear()}
            </Text>
            <Text>Starting Amount: ${StartingAmount}</Text>
            <Text>Total Cost: ${TotalCost}</Text>
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
    </View>
  );
}
