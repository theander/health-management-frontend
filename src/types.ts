export type User = IUser;

interface IUser {
  username: string;
  password: string;
  accessToken: string;
  refreshToken: string;
}
