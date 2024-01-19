// app/_components/SignOut.js
import { useRouter } from 'next/router';
import { useUser, signOut } from '@clerk/nextjs';

function SignOut() {
  const router = useRouter();
  const { user } = useUser();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
}

export default SignOut;
