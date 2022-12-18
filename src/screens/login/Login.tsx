import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/UserService';

export const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(
    {} as { username: string; password: string }
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && localStorage.getItem('access_token') !== null) {
      navigate('/home');
    }
  }, [loading, navigate]);

  const submitLogin = (event: any) => {
    event.preventDefault();
    setLoading(true);

    login(user.username, user.password)
      .then((user) => {
        localStorage.setItem('access_token', user.access_token);
        localStorage.setItem('refresh_token', user.refresh_token);
        navigate('/home');
      })
      .catch((err) => {
        console.log('Erro:', err.message);
        navigate('/erro');
      });

    setLoading(false);
    setTimeout(() => {
      localStorage.setItem('token', 'token');
    }, 2000);
  };

  const handleFormField = (e: any) => {
    const { name, value } = e.target;
    setUser((previousValue) => {
      return { ...previousValue, [name]: value };
    });
  };

  return (
    <form onSubmit={submitLogin}>
      <label>Usuário</label>
      <input type='text' onChange={handleFormField} name='username' />
      <label>Senha</label>
      <input type='password' onChange={handleFormField} name='password' />
      <div>
        {loading && <div></div>}
        <button>Entrar</button>
      </div>
    </form>
  );
};

// https://codesandbox.io/s/pt362q?file=/demo.js:298-2314
// function ModeToggle() {
//     const { mode, setMode } = useColorScheme();
//     const [mounted, setMounted] = React.useState(false);
//
//     // necessary for server-side rendering
//     // because mode is undefined on the server
//     React.useEffect(() => {
//         setMounted(true);
//     }, []);
//     if (!mounted) {
//         return null;
//     }
//
//     return (
//         <Button
//             variant="outlined"
//             onClick={() => {
//                 setMode(mode === 'light' ? 'dark' : 'light');
//             }}
//         >
//             {mode === 'light' ? 'Turn dark' : 'Turn light'}
//         </Button>
//     );
// }
//
// export default function App() {
//     return (
//         <CssVarsProvider>
//             <main>
//                 <ModeToggle />
//                 <Sheet
//                     sx={{
//                         width: 300,
//                         mx: 'auto', // margin left & right
//                         my: 4, // margin top & botom
//                         py: 3, // padding top & bottom
//                         px: 2, // padding left & right
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: 2,
//                         borderRadius: 'sm',
//                         boxShadow: 'md',
//                     }}
//                     variant="outlined"
//                 >
//                     <div>
//                         <Typography level="h4" component="h1">
//                             <b>Welcome!</b>
//                         </Typography>
//                         <Typography level="body2">Sign in to continue.</Typography>
//                     </div>
//                     <TextField
//                         // html input attribute
//                         name="email"
//                         type="email"
//                         placeholder="johndoe@email.com"
//                         // pass down to FormLabel as children
//                         label="Email"
//                     />
//                     <TextField
//                         name="password"
//                         type="password"
//                         placeholder="password"
//                         label="Password"
//                     />
//                     <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
//                     <Typography
//                         endDecorator={<Link href="/sign-up">Sign up</Link>}
//                         fontSize="sm"
//                         sx={{ alignSelf: 'center' }}
//                     >
//                         Don&apos;t have an account?
//                     </Typography>
//                 </Sheet>
//             </main>
//         </CssVarsProvider>
//     );
// }
