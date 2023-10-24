import { useRouter } from 'next/router';
import axios from 'axios';
import { LABS_API_BASE_URL } from '../../../../components/const/url-constants';
import { useSession } from 'next-auth/react';
import Loading from '../../../../components/general/loading';
import React from 'react';

export default function Concluir() {
  const route = useRouter();
  const session = useSession();
  if (session.status === 'loading') {
    return <Loading />;
  }
  const id = route.query.id;
  axios.put(`${LABS_API_BASE_URL}/api/lab/${id}/done`).then((resp) => {
    route.push('/labs/para-fazer');
  });
}
