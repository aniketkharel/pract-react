import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/GlobalStyle";
import CardItem from "../components/app/CardItem";

function ReviewDetails({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={globalStyles.container}>
      <CardItem>
        <Text style={globalStyles.titleText}>{item.body}</Text>
        <Text style={globalStyles.titleText}>{item.rating}</Text>
      </CardItem>
    </View>
  );
}
const styles = StyleSheet.create({});
export default ReviewDetails;
