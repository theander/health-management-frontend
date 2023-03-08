import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Delete() {
  const [message, setMensage] = useState('Deleted user');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = router.query.id;
  id && loading && deleteUser(id);

  async function deleteUser(id: any) {
    const res = await axios
      .delete(`http://localhost:8180/api/users/${id}`)
      .then((res) => {
        setMensage('User deleted');
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setMensage(`User with id=${id} not found`);
        } else {
          setMensage(`Unknown error with code: ${error.status}`);
        }
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          router.push('/admin');
        }, 3000);
      });
  }
  return loading ? <h3>Loading</h3> : <h1>{message}</h1>;
}
