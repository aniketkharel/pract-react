import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../components/layouts/Header";

const Stack = createStackNavigator();

export default function HomeNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#666F76",
        },
        headerTintColor: "#eee",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title={"Reviewer"} />
          ),
        }}
      />
      <Stack.Screen name="Review Details" component={ReviewDetails} />
    </Stack.Navigator>
  );
}
