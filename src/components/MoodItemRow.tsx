import React, { useCallback } from 'react';
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

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};

export const MoodItemRow = ({ item }: MoodItemRowProps) => {
  const { deleteMoodList } = useMoodStore();
  const handleDeleteList = useCallback(
    (data: MoodOptionWithTimestamp) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      deleteMoodList(data);
    },
    [deleteMoodList],
  );
  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>
        {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
      </Text>
      <Pressable onPress={() => handleDeleteList(item)}>
        <Text style={styles.textDelete}>Delete</Text>
      </Pressable>
    </View>
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
