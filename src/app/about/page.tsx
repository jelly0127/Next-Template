'use client';

import Link from 'next/link';
import useStore from '@/store';

const About = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h1 className="text-lg text-[#a11a31] capitalize">about page</h1>
      <Link href="/">back</Link>
      <br />
      <button aria-label="Increment value" onClick={increment}>
        Increment
      </button>
      <br />

      <span>{count}</span>
      <br />

      <button aria-label="Decrement value" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default About;
