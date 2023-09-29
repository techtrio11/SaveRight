//displays savings graphs
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";
import getData from "../Utils/GetData";
import { bigGoalReference } from "../../FirebaseConfig";

export default function Graph() {
  const Data = getData(bigGoalReference);
  const StartDate = new Date();
  const MonthsUntilPurchase = 5;
  const StartingAmount = 100;
  const TotalCost = 2000;

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
      <Text>{StartDate.toString()}</Text>
      <Text>{Data}</Text>
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
        yAxisSuffix="k"
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
    </View>
  );
}
