import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../components/layouts/Header";

const Stack = createStackNavigator();

export default function AboutNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="About"
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
        name="About"
        component={About}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title={"About Reviewer"} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
