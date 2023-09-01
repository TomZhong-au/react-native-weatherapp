import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator } from "react-native";
import { useGetWeather } from "./src/hooks/useGetWeather";

export default function App() {
  const [loading, error, weather] = useGetWeather();
  console.log(weather);

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
