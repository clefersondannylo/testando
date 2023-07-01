import React from "react";
import { StatusBar } from "react-native";

import { LoginScreen } from "./src/pages/LoginScreen";

export function App() {
  return (
    <>
      <StatusBar barStyle={"dark-content"}/>
      <LoginScreen />
    </>
  );
}
