// eslint-disable-next-line import/named
import { loginRepo } from './login.memory.repository';
// eslint-disable-next-line import/named
import { ILogin } from '../../types/index';

const login = (user: ILogin): Promise<string> =>  loginRepo.loginUser(user);

export const loginService = {
  login
};
