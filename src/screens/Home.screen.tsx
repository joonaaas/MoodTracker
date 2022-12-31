import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionType } from '../types';
import { useMoodStore } from '../stores/useMoodStore';

export default function HomeScreen() {
  const { _hasHydrated, addMoodList } = useMoodStore();
  const handleSelectMood = useCallback(
    (mood: MoodOptionType) => {
      addMoodList(mood);
    },
    [addMoodList],
  );

  if (!_hasHydrated) {
    return <Text>{JSON.stringify(_hasHydrated)}</Text>;
  }

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={handleSelectMood} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
