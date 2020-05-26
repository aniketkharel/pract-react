import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [name, setName] = useState("sofiya");
  const [age, setAge] = useState(40);
  const [person, setPerson] = useState([
    { username: "guu", id: "1" },
    { username: "guu khane", id: "2" },
    { username: "nkhane ho", id: "3" },
  ]);
  const updateName = () => {
    setName("sofiya-banmalo");
  };

  const pressHandle = (id) => {
    console.log(id);
    setPerson((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        placeholder="e.g. John Doe"
        onChangeText={(val) => setName(val)}
        style={styles.input}
      />
      <Text>Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="e.g. 30"
        onChangeText={(val) => setAge(val)}
        style={styles.input}
      />
      <Text>my name is {name}</Text>
      <Text>and my age is {age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Update Name" onPress={updateName} />
      </View>
      <FlatList
        data={person}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandle(item.id)}>
            <Text>{item.username}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
    color: "#fff",
    backgroundColor: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
