'use client';

import Link from 'next/link';
import useStore from '@/store';
import useAppStore from '@/store/useAppStore';
import { useContext, useEffect, useState } from 'react';
import { ProvidersContext } from '@/contexts/Providers';

const About = () => {
  const appData = useStore(useAppStore, (state) => state);
  const theme = useContext(ProvidersContext);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/api/hello?id=2')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);
  useEffect(() => {
    console.log('message--', message);
  }, [message]);
  return (
    <div>
      <h1 className="text-lg capitalize text-[#a11a31] dark:text-[yellow]">
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
