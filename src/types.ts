export type User = IUser;

interface IUser {
  username: string;
  password: string;
  access_token: string;
  refresh_token: string;
}
