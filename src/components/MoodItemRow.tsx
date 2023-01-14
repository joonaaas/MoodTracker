import React, { useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import format from 'date-fns/format';
import { MoodOptionWithTimestamp } from '../types';
import { theme } from '../theme';
import { useMoodStore } from '../stores/useMoodStore';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};

const maxSwipe = 80;

export const MoodItemRow = ({ item }: MoodItemRowProps) => {
  const { deleteMoodList } = useMoodStore();
  const handleDeleteList = useCallback(
    (data: MoodOptionWithTimestamp) => {
      // built in animation in `react-native`
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      deleteMoodList(data);
    },
    [deleteMoodList],
  );

  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  }, []);

  const slideGesture = useMemo(() => {
    return Gesture.Pan()
      .onStart(event => {
        console.warn('start', event.x);
      })
      .onUpdate(event => {
        translateX.value = withTiming(event.translationX, {
          duration: 150,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        });
      })
      .onEnd(event => {
        ('worklet');
        if (Math.abs(event.translationX) > maxSwipe) {
          translateX.value = withTiming(1000 * Math.sign(event.translationX));
          console.warn('DELETE!');

          runOnJS(handleDeleteList)(item);
        } else {
          translateX.value = withSpring(0);
        }

        console.log('event end');
      });
  }, [translateX, handleDeleteList, item]);

  return (
    <GestureDetector gesture={slideGesture}>
      <Animated.View style={[styles.moodItem, animatedStyle]}>
        <View style={styles.iconAndDescription}>
          <Text style={styles.moodValue}>{item.mood.emoji}</Text>
          <Text style={styles.moodDescription}>{item.mood.description}</Text>
          {/* <Text style={styles.moodDescription}>{translateX.value}</Text> */}
        </View>
        <Text style={styles.moodDate}>
          {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
        </Text>
        <Pressable onPress={() => handleDeleteList(item)}>
          <Text style={styles.textDelete}>Delete</Text>
        </Pressable>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    color: theme.colorLavender,
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    color: theme.colorPurple,
    fontFamily: theme.fontFamilyRegular,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDelete: {
    color: theme.colorBlue,
    fontFamily: theme.fontFamilyLight,
  },
});
