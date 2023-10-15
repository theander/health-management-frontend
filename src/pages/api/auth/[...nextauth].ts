import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { USER_API_BASE_URL } from '../../../../components/const/url-constants';
import axios from 'axios';
import { log } from 'util';
import { mockProviders } from 'next-auth/client/__tests__/helpers/mocks';
import credentials = mockProviders.credentials;

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
        // if (!credentials.password) {
        //   const credi = await axios.get(
        //     `${USER_API_BASE_URL}/api/user-by-email/${credentials.username}`
        //   );
        //   credentials = await credi.data;
        // }
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
