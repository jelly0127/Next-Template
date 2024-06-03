'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SessionRedirect = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log('Current session status:', status);
    if (status === 'unauthenticated') {
      router.push('/auth');
    }
  }, [status, router]);

  return null;
};

export default SessionRedirect;
