import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";

const ListItem = ({ dt_txt, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name={weatherType[condition].icon} size={50} color={"white"} />
      <View>
        <Text style={styles.date}>{dt_txt}</Text>
        <Text style={styles.temp}>{`${Math.round(min)}° / ${Math.round(
          max
        )}°`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
  },
});

export default ListItem;
