import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import DrawerNavigator from "./routes/Drawer";
//load fonts
const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);
  if (fontLoaded) {
    return <DrawerNavigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setfontLoaded(true)} />
    );
  }
}
