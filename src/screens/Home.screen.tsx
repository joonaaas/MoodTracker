import { StyleSheet, View } from 'react-native';
import { useCallback } from 'react';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionType } from '../types';
import { MoodItemRow } from '../components/MoodItemRow';
import { useMoodStore } from '../stores/useMoodStore';

export default function HomeScreen() {
  const { moodList, addMoodList } = useMoodStore();
  console.log('Hoomme');
  const handleSelectMood = useCallback(
    (mood: MoodOptionType) => {
      addMoodList(mood);
    },
    [addMoodList],
  );

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
