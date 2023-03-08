import { Auth } from '@auth/core';
import NextAuth from 'next-auth';
import CredentialsProvider, {
  CredentialsConfig,
} from 'next-auth/providers/credentials';
import axios from 'axios';
import { TokenSet } from '@auth/core/types';
import { CredentialInput } from '@auth/core/providers';
import config from 'next/config';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const resp = await axios.post(
          'http://localhost:8180/api/login',
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
        // const isValid = await verifyPassword(
        //   credentials.password,
        //   admin.password
        // );
        // if (!isValid) {
        //   throw new Error('could not log in');
        // }

        return {
          id: user.access_token,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, isNewUser }) => {
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
      return { ...session, accessToken: token.sub };
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
    error?: 'RefreshAccessTokenError';
  }
}
