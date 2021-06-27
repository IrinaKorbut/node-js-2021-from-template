import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { ILogin } from '../../types/index';
import User from '../../entities/user';

const JWT_SECRET_KEY = 'JWT_SECRET_KEY';

const loginUser = async (userCredentials: ILogin): Promise<string> => {
  const { login, password } = userCredentials;
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({login})
  if(!user){
    return 'NOT_FOUND'
  }
  const comparePassword = bcrypt.compareSync(password, user.password)
  if (!comparePassword) {
    return 'FORBIDDEN'
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const token = jwt.sign({userId: user.id, login: user.login}, process.env[JWT_SECRET_KEY], { expiresIn: '24h' })
  return token
}

export const loginRepo =  {
  loginUser
};
