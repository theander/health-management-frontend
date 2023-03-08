import { useRouter } from 'next/navigation';

export default function FirstPage() {
  redirects();
  return <></>;
}
async function redirects() {
  const router = useRouter();
  await router.push('/home');
}
