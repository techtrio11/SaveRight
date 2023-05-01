import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SmallGoal from "./src/small_goal";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/ionicons";

//Screens
import HomeScreen from "./src/Home";
import SmallGoalScreen from "./src/small_goal";

// Screen Names
const homeName = 'Home';
const smallGoalName = 'Small Goal'
const Tab = createbottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={homeName}
      screenOptions{({ route}) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused? 'home' : "home-outline";
          }
        }
      })}>


      </Tab.Navigator>
    </NavigationContainer>
  );
}

