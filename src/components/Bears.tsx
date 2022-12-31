import { View, Text, Pressable } from 'react-native';
import React, { useCallback } from 'react';
import { useMoodStore } from '../stores/useMoodStore';

export function Bears() {
  const { bears, increaseBears } = useMoodStore();
  console.log('Bears');
  const handleIncreaseBears = useCallback(() => {
    increaseBears();
  }, [increaseBears]);
  return (
    <View>
      <Text>{JSON.stringify(bears)}</Text>
      <Pressable onPress={() => handleIncreaseBears()}>
        <Text>Press To Increse</Text>
      </Pressable>
      <Text>Bears</Text>
    </View>
  );
}
