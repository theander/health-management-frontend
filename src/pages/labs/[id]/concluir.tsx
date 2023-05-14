import { useRouter } from 'next/router';
import axios from 'axios';

export default function Concluir() {
  const route = useRouter();
  const id = route.query.id;
  axios.put(`http://localhost:8380/api/lab/${id}/done`).then((resp) => {
    route.push('/labs/para-fazer');
  });
}
