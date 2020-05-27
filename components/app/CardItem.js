import React from "react";
import { StyleSheet, View } from "react-native";

function CardItem(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardView}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardView: { marginHorizontal: 18, marginVertical: 20 },
});

export default CardItem;
