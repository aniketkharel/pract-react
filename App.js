import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/layouts/Header";
import TodoItem from "./components/app/TodoItem";
import AddTodo from "./components/app/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
  ]);
  const pressHandler = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id != id);
    });
  };
  const submitHandler = (title) => {
    if (title.length > 3) {
      setTodos((prevTodo) => {
        return [
          { title: title, id: Math.random() * 1000000, completed: false },
          ...prevTodo,
        ];
      });
    } else {
      Alert.alert("OOPS!", "Really that small todo ?", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* todo form here*/}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    // backgroundColor: "pink",
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: "yellow",
  },
});
