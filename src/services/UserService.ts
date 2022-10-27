import { authInstance } from '../api/userInstance';
import { User } from '../types';

export async function getUsers() {
  const resp = await authInstance.get('/api/users');
  return resp.data;
}

export async function login(username: string, password: string): Promise<User> {
  const form = new FormData();
  form.append('username', username);
  form.append('password', password);

  const resp = await authInstance({
    method: 'post',
    url: '/api/login',
    data: form
  });
  return await resp.data;
}

export async function refreshToken() {}

export async function logout() {
  //logout
}
