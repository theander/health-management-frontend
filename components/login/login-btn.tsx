import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className='w-100 btn btn-lg btn-primary'
        onClick={() => {
          signIn('google');
          localStorage.setItem('sign', 'google');
        }}
      >
        <Image
          src='./icons/google.svg'
          alt='google-icon'
          width={36}
          height={16}
        />
        Sign in
      </button>
    </>
  );
}
