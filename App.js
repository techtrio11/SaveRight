import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import Education from "./src/education";
import Home from "./src/Home";
import SmallGoal from "./src/small_goal";

// Screen Names
const homeName = "Home";
const smallGoalName = "Small Goal";
const educationName = "Education";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === smallGoalName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === educationName) {
              iconName = focused ? "book" : "book-outline";
            }
            return <Ionicons name={iconName} />;
          },
        })}
      >
        <Tab.Screen name={educationName} component={Education} />
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={smallGoalName} component={SmallGoal} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
