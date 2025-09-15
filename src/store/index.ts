import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {devtools} from 'zustand/middleware';

interface AppState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        theme: 'light',
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
          })),
      }),
      {
        name: 'app-storage', // unique name
      }
    )
  )
);

export default useStore;