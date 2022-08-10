import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import Results from './Components/Results/Results';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Homepage />
        <Results />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
