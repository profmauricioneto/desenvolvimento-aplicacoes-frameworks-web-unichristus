import { create } from 'zustand';

const useCounter = create(set => ({
  count: 0,
  decrement: () =>
    set(state => ({
      count: state.count - 1,
    })),
  increment: () =>
    set(state => ({
      count: state.count + 1,
    })),
}));

export default useCounter;