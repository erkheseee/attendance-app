import React, {useState, useEffect} from "react";
import { StyleSheet, View } from 'react-native';
import Navigation from "./src/navigation";
import { LogBox } from "react-native";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default function App() {

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
