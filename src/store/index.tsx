import create from 'zustand';

import { StoreProps } from './types';

const useStore = create<StoreProps>()((set) => ({
  isDark: false,
  changeTheme: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useStore;
