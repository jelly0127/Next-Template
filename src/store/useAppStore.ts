import { create } from 'zustand';
import { devtools, persist, PersistStorage } from 'zustand/middleware';

// Define the IAppData interface to describe the shape of the state
interface IAppData {
  dark: boolean;
  count: number;
  increment: () => void;
  decrement: () => void;
  updateTheme: () => void;
}

// Define the StorageValue interface to describe the shape of the persisted state
interface StorageValue<T> {
  state: T;
  version: number;
}

// Custom storage interface to properly type the storage methods
const localStoragePersist: PersistStorage<IAppData> = {
  // Define the getItem method to retrieve the persisted state from localStorage
  getItem: (name) => {
    const value = localStorage.getItem(name);
    if (value) {
      // Parse the stored value and return it as a Promise
      const parsed = JSON.parse(value) as StorageValue<IAppData>;
      return Promise.resolve(parsed);
    }
    // Return null if no value is found
    return Promise.resolve(null);
  },
  // Define the setItem method to store the state in localStorage
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
    return Promise.resolve();
  },
  // Define the removeItem method to remove the state from localStorage
  removeItem: (name) => {
    localStorage.removeItem(name);
    return Promise.resolve();
  },
};

// Create the store using Zustand with devtools and persist middleware
const useAppStore = create<IAppData>()(
  devtools(
    persist(
      // Define the reducer function to manage the state
      (set) => ({
        count: 0,
        dark: true,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        updateTheme: () => set((state) => ({ dark: !state.dark })),
      }),
      // Configuration for the persist middleware
      {
        name: 'app', // Name of the storage (localStorage key)
        storage: localStoragePersist, // Custom storage interface
      }
    )
  )
);

export default useAppStore;
