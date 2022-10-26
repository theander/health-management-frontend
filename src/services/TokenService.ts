import jwtDecode from 'jwt-decode';
interface IDecodedToken {
  roles: string[];
}
interface IUser {
  refreshToken: string;
  accessToken: string;
}
export class TokenService {
  decodeToken() {
    const accessToken = localStorage.getItem('access_token') || '';
    const decodedToken: IDecodedToken = jwtDecode(accessToken);
    console.log(decodedToken.roles);
    return decodedToken;
  }
  // getLocalRefreshToken(): string {
  //   const user: IUser = JSON.parse(localStorage.getItem('user') || '');
  //   return ''; //user?.refreshToken || '';
  // }

  getLocalAccessToken() {
    const token = localStorage.getItem('access_token') || '';
    return token;
  }

  updateLocalAccessToken(token: string) {
    let user = JSON.parse(localStorage.getItem('user') || '');
    user.accessToken = token;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '');
  }

  setUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem('user');
  }
}
