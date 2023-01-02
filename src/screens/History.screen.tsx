import { ScrollView } from 'react-native';
import React from 'react';
import { useMoodStore } from '../stores/useMoodStore';
import { MoodItemRow } from '../components/MoodItemRow';

export default function HistoryScreen() {
  const { moodList } = useMoodStore();

  return (
    <ScrollView>
      {moodList.map(item => (
        <MoodItemRow key={item.timestamp} item={item} />
      ))}
    </ScrollView>
  );
}
