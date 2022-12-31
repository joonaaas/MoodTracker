import create from 'zustand';
import { createHydrationSlice, HydrationType } from './hydrationSlice';
import { createMoodSlice, MoodSlice } from './moodSlice';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useMoodStore = create<MoodSlice & HydrationType>()(
  persist(
    (...a) => ({
      ...createMoodSlice(...a),
      ...createHydrationSlice(...a),
    }),
    {
      name: 'mood-store',
      getStorage: () => AsyncStorage,
      onRehydrateStorage: () => {
        console.log('hydration starts');

        // optional
        return (state, error) => {
          if (error) {
            console.log('an error happened during hydration', error);
          } else {
            console.log('hydration finished');
          }

          console.log({ state });

          state?.setHasHydrated(true);
        };
      },
    },
  ),
);
