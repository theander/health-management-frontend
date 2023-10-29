import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Loading from '../../components/general/loading';
import React from 'react';

export default function FirstPage() {
  const session = useSession();
  if (session.status === 'loading') {
    return <Loading />;
  }
  redirects();
  return <></>;
}
async function redirects() {
  const router = useRouter();
  await router.push('/home');
}
