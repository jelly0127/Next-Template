import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col">
      {session ? <p>Welcome {session?.user?.name}!</p> : <div>Un Login</div>}
    </div>
  );
}
