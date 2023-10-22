'use client';

import Link from 'next/link';
import useStore from '@/store';
import useAppStore from '@/store/useAppStore';

const About = () => {
  const appData = useStore(useAppStore, (state) => state);
  return (
    <div>
      <h1 className="text-lg text-[#a11a31] capitalize">about page</h1>
      <Link href="/">back</Link>
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
