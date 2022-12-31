import create from 'zustand';
// import { createBearSlice, BearSlice } from './bearSlice';
import { createMoodSlice, MoodSlice } from './moodSlice';

export const useMoodStore = create<MoodSlice>()((...a) => ({
  ...createMoodSlice(...a),
}));
