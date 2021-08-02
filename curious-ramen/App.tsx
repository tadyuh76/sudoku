import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width - 16

export default function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    .flatMap((arr) => [arr, arr, arr, arr, arr, arr, arr, arr, arr])
    .sort(() => Math.random() - 0.5);
  return (
    <View style={styles.container}>
      {arr.map((item) => (
        <View style={styles.view}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: "space-between",
    alignContent: "space-between",
    marginTop: 100,
    margin: 16,
    borderWidth: 1,
    borderColor: '#000',
    width: width,
    height: width,
  },
  view: {
    height: width/9-1,
    width: width/9-1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxSizing: "border-box",
    borderWidth: 1,
    borderColor: "#ccc"
  },
  text: {
    color: "#000"
  }
});
