import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
interface IAppData {
  dark: boolean;
  count: number;
  increment: () => void;
  decrement: () => void;
  updateTheme: () => void;
}

const useAppStore = create<IAppData>()(
  devtools(
    persist(
      // reducer
      (set) => ({
        count: 0,
        dark: true,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        updateTheme: () => set((state) => ({ dark: !state.dark })),
      }),

      // configuration
      {
        name: 'app',
        getStorage: () => localStorage,
      }
    )
  )
);

export default useAppStore;
