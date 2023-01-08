import { StyleSheet, Text, View, Image } from 'react-native';
import { useCallback } from 'react';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionType } from '../types';
import { useMoodStore } from '../stores/useMoodStore';
// import Animated, {
//   Easing,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from 'react-native-reanimated';

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

export default function HomeScreen() {
  // const shared = useSharedValue(0);
  // const styleAnimation = useAnimatedStyle(
  //   () => ({
  //     transform: [{ translateX: shared.value }],
  //   }),
  //   [],
  // );

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
      <Image source={{ uri: imageUrl }} style={{ height: '100%' }} />
      <View style={[StyleSheet.absoluteFill, { justifyContent: 'center' }]}>
        <MoodPicker handleSelectMood={handleSelectMood} />
        {/* <Pressable
          onPress={() => {
            shared.value = withTiming(shared.value + 40, {
              duration: 300,
              easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            });
          }}>
          <Animated.View style={[styles.square, styleAnimation]} />
        </Pressable> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // square: { width: 100, height: 100, backgroundColor: 'lightgreen' },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
