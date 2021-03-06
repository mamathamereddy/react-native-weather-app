import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "./Icon";

const AdditionalInfo = ({ text, temperature, units, icon, name, size }) => {
  return (
    <View style={{ padding: 10, marginLeft: 35, flexDirection: "row" }}>
      <Icon iconFamily={icon} name={name} size={size} color="#ba7111" />
      <View style={{ padding: 7 }}>
        <Text style={{ fontSize: 19, color: "green" }}>{text}</Text>
        <Text style={{ fontSize: 19, color: "#ad512d" }}>
          {temperature}
          {units}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  descriptionContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    flex: 0.5,
  },
});
export default AdditionalInfo;
