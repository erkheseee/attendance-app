import React, {useState, useEffect} from "react";
import { StyleSheet, View } from 'react-native';
import Navigation from './src/navigation';
import * as SQLite from 'expo-sqlite';

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
