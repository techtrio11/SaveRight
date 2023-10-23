import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createAppContainer } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import Education from "./src/education";
import Home from "./src/Home";
import SmallGoal from "./src/small_goal";
import BigGoal from "./src/big_goal";

//import NewGoalScreen from "./src/new_goal";

// Screen Names
const homeName = "Home";
const smallGoalName = "Small Goal";
const educationName = "Education";
const bigGoalName = "Big Goal";

const Tab = createBottomTabNavigator();

{
  /*const RootStack = createStackNavigator{
  {
    NewGoal: NewGoalScreen
  }{
  initialRouteName: 'NewGoal'
}};

const AppContainer2 = createAppContainer(RootStack)*/
}
export default function App() {
  return (
    //<AppContainer2/>
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
            } else if (rn === bigGoalName) {
              iconName = focused ? "bar-chart" : "bar-chart-outline";
            }
            return <Ionicons name={iconName} />;
          },
        })}
      >
        <Tab.Screen name={educationName} component={Education} />
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={smallGoalName} component={SmallGoal} />
        <Tab.Screen name={bigGoalName} component={BigGoal} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
