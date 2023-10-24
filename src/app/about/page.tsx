'use client';

import Link from 'next/link';
import useStore from '@/store';
import useAppStore from '@/store/useAppStore';
import { useContext } from 'react';
import { ProvidersContext } from '@/contexts/Providers';
import { Button } from '@chakra-ui/react';
const About = () => {
  const appData = useStore(useAppStore, (state) => state);
  const theme = useContext(ProvidersContext);
  return (
    <div>
      <h1 className="text-lg text-[#a11a31] capitalize dark:text-[yellow]">
        about page
      </h1>
      <Link href="/">back</Link>
      <br />
      {theme?.themeMode}
      <br />
      <button onClick={appData?.updateTheme}>change themeMode</button>
      <br />
      <button aria-label="Increment value" onClick={appData?.increment}>
        Increment
      </button>
      <br />

      <span>{appData?.count}</span>
      <br />

      <button aria-label="Decrement value" onClick={appData?.decrement}>
        Decrement
      </button>
    </div>
  );
};

export default About;
