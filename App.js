import React, {useState, useEffect} from "react";
import { StyleSheet, View } from 'react-native';
import Navigation from "./src/navigation";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs(["Warning: Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Rows`, expected `object`."]);

  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
