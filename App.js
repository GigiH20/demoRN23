import React from "react";
import { View, Text, SafeAreaView, StyleSheet,Dimensions,Image } from "react-native";
import { Header } from "react-native-elements";
import Content from "./screens/Home/Content";
import Headers from "./screens/Home/Header";
const { height, width } = Dimensions.get('window');

const App = () => {
  return (
    <View>
      <Headers/>
      <Content/>
    </View>
  );
};


export default App;