import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../styles/GlobalStyle";
import CardItem from "../components/app/CardItem";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "../components/app/ReviewForm";

function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      rating: 3,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      rating: 4,
      id: 2,
      title: "qui est esse",
      body:
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      rating: 5,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body:
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      rating: 4.5,
      id: 4,
      title: "eum et est occaecati",
      body:
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
  ]);
  const [modal, setModal] = useState(false);

  const addReview = (review) => {
    review.id = Math.random() * 1000000;
    setReviews((prevReviews) => {
      return [review, ...prevReviews];
    });
    setModal(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modal} animationType="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModal(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />

            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModal(true)}
        style={styles.modalToggle}
      />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Review Details", { item: item })
            }
          >
            <CardItem>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </CardItem>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
    alignSelf: "center",
  },
  modalClose: {
    marginBottom: 0,
    marginTop: 20,
  },
  modalContent: {
    flex: 1,
  },
});
export default Home;
