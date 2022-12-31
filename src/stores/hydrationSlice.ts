import { StateCreator } from 'zustand';

export type HydrationType = {
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

export const createHydrationSlice: StateCreator<
  HydrationType,
  [],
  [],
  HydrationType
> = set => ({
  _hasHydrated: false,
  setHasHydrated: state => {
    set({
      _hasHydrated: state,
    });
  },
});
