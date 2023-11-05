// @ts-ignore

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { USER_API_BASE_URL } from '../../../../components/const/url-constants';
import axios from 'axios';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || 'ID_GOOGLE',
      clientSecret: process.env.GOOGLE_SECRET || 'ID_GOOGLE',
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        const resp = await axios.post(
          `${USER_API_BASE_URL}/api/login`,
          {
            ...credentials,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
        const user = await resp.data;
        if (!user) {
          throw new Error('No admin found!');
        }

        const resp1 = await axios.get(`${USER_API_BASE_URL}/api/users`);
        const usrs = await resp1.data;
        const { email, roles } = usrs.find((val: any) =>
          val.username.includes(credentials?.username)
        );
        const { access_token } = user;
        return {
          id: access_token,
          email: email,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, trigger, session }) => {
      if (trigger === 'update') {
        return { ...token, ...session };
      }

      if (token.sub) {
        return token;
      } else {
        throw new Error('Invalid token!');
      }
    },

    session: async ({ session, token }) => {
      if (!token.sub) {
        throw new Error('Invalid session!');
      }
      return {
        ...session,
        accessToken: token.sub,
        user: { email: token.email },
        role: token.role,
      };
    },
  },
  pages: {
    signIn: '/login',
  },
});
//https://next-auth.js.org/tutorials/refresh-token-rotation

declare module '@auth/core/types' {
  interface Session {
    error?: 'RefreshAccessTokenError';
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    access_token: string;
    expires_at: number;
    refresh_token: string;
    role: string;
    error?: 'RefreshAccessTokenError';
    user: {
      email: string;
    };
  }
}
