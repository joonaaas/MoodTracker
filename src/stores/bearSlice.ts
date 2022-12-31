import { StateCreator } from 'zustand';

export interface BearSlice {
  bears: number;
  fishes: number;
  addBear: (bears: number) => void;
  eatFish: (fishes: number) => void;
}

export const createBearSlice: StateCreator<
  BearSlice,
  [],
  [],
  BearSlice
> = set => ({
  bears: 0,
  fishes: 0,
  addBear: () => set(state => ({ bears: state.bears + 1 })),
  eatFish: () => set(state => ({ fishes: state.fishes - 1 })),
});
