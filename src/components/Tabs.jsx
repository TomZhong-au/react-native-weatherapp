import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import CurrentWeather from "../screens/CurrentWeather";
import City from "../screens/City";
import UpcomingWeather from "../screens/UpcomingWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TAB_DATA = [
  { name: "Current", component: CurrentWeather, icon: "droplet" },
  { name: "Upcoming", component: UpcomingWeather, icon: "clock" },
  { name: "City", component: City, icon: "home" },
];

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "tomato",
        },
      }}
    >
      {TAB_DATA.map(({ name, component, icon }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={icon}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Tabs;
