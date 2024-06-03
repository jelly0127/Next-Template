import { auth, signIn, signOut } from '@/auth';
import React from 'react';

const page = async () => {
  const session = await auth();

  return (
    <div className="flex gap-x-[40px]">
      <form
        action={async () => {
          'use server';
          await signIn('github');
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
      <p>{session?.expires}</p>
      {session && (
        <form
          action={async (formData) => {
            'use server';
            await signOut();
          }}
        >
          <button type="submit">Sign out</button>
        </form>
      )}

      <div>
        {session && <img src={session?.user?.image || ''} alt="User Avatar" />}
      </div>
    </div>
  );
};

export default page;
