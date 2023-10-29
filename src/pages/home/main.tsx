import { getSession, useSession } from 'next-auth/react';
import { USER_API_BASE_URL } from '../../../components/const/url-constants';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';
import Loading from '../../../components/general/loading';

export default function Main(props: any) {
  const [roles, setRoles] = useState([]);
  const router = useRouter();
  const session = useSession();
  const [showChild, setShowChild] = useState(false);
  let role;

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (role) {
    router.push('/home');
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    if (session.status === 'loading') {
      return <Loading />;
    } else if (session.status !== 'authenticated') {
      router.push('/login');
    } else {
      const { accessToken } = { accessToken: '', ...session?.data };
      if (accessToken.length > 25) {
        let { sub: username, roles: userRoles } = jwt_decode(
          accessToken || ''
        ) as {
          roles: string[];
          sub: string;
        };

        roles.length < 2 && roles
          ? setRoles((prevState) => [...prevState, userRoles[0]])
          : null;
        localStorage.setItem('role', userRoles[0]);
        localStorage.setItem('username', username);
        router.push('/home');
      } else {
        let userRole = props.result?.roles?.map((role: any) => role.name)[0];
        roles.length < 2 && roles
          ? setRoles((prevState) => [...prevState, userRole])
          : null;
        localStorage.setItem('username', props.result.username);
        localStorage.setItem('role', userRole);
        router.push('/home');
      }
    }
  }

  return <></>;
}

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      props: {
        error: 'Session Error',
      },
    };
  }
  const { user } = session;
  const resp = await fetch(
    `${USER_API_BASE_URL}/api/user-by-email/${user?.email}`
  );
  if (resp.status === 200) {
    const result = await resp.json();

    return {
      props: {
        result,
      },
    };
  } else {
    return {
      props: {
        user,
      },
    };
  }
}
