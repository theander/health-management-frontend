import { TokenService } from '../services/TokenService';
import React from 'react';

export const About: React.FC = () => {
  const tkn = new TokenService();
  const test = tkn.decodeToken();
  console.log(test);
  // const users = getUsers();
  //const user = login();

  // const [list,setList] = useState();
  //
  // useEffect(()=>{
  //     setList(users)
  // },[users])

  // return (<div>{list.map(x=>console.log(x))}</div>);
  return <h1>About</h1>;
};
