import React from 'react';
import SignIn from '../common/Header';


const Dom = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignIn />
      {children}
    </>
  );
};

export default Dom;
