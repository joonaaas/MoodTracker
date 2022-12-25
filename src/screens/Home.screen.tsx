import { StyleSheet, View } from 'react-native';
import React from 'react';
import { MoodPicker } from '../components/MoodPicker';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MoodPicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
