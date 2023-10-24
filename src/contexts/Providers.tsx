'use client';

import useStore from '@/store';
import useAppStore from '@/store/useAppStore';
import { createContext, useEffect, useState } from 'react';

type ThemeMode = 'dark' | 'light';

interface IContext {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

export const ProvidersContext = createContext<IContext | null>(null);

const Providers = ({ children }: { children: React.ReactNode }) => {
  const appData = useStore(useAppStore, (state) => state);
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  useEffect(() => {
    if (appData?.dark) {
      document.documentElement.className = 'dark';
      return setThemeMode('dark');
    } else {
      document.documentElement.className = '';
      return setThemeMode('light');
    }
  }, [appData?.dark]);
  const value = {
    themeMode,
    setThemeMode,
  };
  return (
    <ProvidersContext.Provider value={value}>
      {children}
    </ProvidersContext.Provider>
  );
};
export default Providers;
