import { StateCreator } from 'zustand';
import { MoodOptionWithTimestamp, MoodOptionType } from '../types';

export type State = {
  moodList: MoodOptionWithTimestamp[];
  bears: number;
};

type Actions = {
  addMoodList: (mood: MoodOptionType) => void;
  increaseBears: () => void;
};

export type MoodSlice = State & Actions;

export const createMoodSlice: StateCreator<State, [], [], MoodSlice> = set => ({
  moodList: [],
  bears: 0,
  addMoodList: mood => {
    set(state => {
      const data = [...state.moodList, { mood, timestamp: Date.now() }];
      return {
        moodList: data,
      };
    });
  },
  increaseBears: () =>
    set(state => ({
      bears: state.bears + 1,
    })),
});
