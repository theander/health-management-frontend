import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';
import { MEDICAL_API_BASE_URL } from '../../../../components/const/url-constants';

export default function Concluir() {
  const [message, setMensage] = useState('Deleted user');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = router.query.id;
  id && loading && deleteUser(id);

  async function deleteUser(id: any) {
    const res = await axios
      .put(`${MEDICAL_API_BASE_URL}/api/consulta/${id}/close`)
      .then((res) => {
        setMensage('Consulta encerrada');
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setMensage(`Consulta com id=${id} not found`);
        } else {
          setMensage(`Unknown error with code: ${error.status}`);
        }
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          router.push('/medical');
        }, 3000);
      });
  }
  return loading ? <h3>Loading</h3> : <h1>{message}</h1>;
}
