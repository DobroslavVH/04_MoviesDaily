import 'react-native-gesture-handler';
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigator/MainNavigator";

// for later remove
import { Text, View } from "react-native";


const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
      {/* offline */}
    </NavigationContainer>

  )

}

export default App