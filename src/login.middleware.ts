import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken'
import { getRepository } from "typeorm";
import User from './entities/user';

const JWT_SECRET_KEY = 'JWT_SECRET_KEY';

const loginMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  if(req.method === 'OPTIONS') {
    next()
  } else {

    const auth = req.headers.authorization

    if(!auth) {
      res.status(401).json({message: "Unauthorized error"})
      return
    }
    if(auth.split(' ')[0] !== 'Bearer') {
      res.status(401).json({message: "Unauthorized error"})
      return
    }

    const token = auth.split(' ')[1]

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jwt.verify(token, process.env[JWT_SECRET_KEY], (_err, decoded) => {
        if(decoded){
          const userRepository = getRepository(User);
          userRepository.findOne( {id: decoded['userId']}).then( user => {
            if(user) {
              next()
            } else {
              res.status(401).json({message: "Unauthorized error"})
            }
          })
        } else {
          res.status(401).json({message: "Unauthorized error"})
        }
      }
    );
  }
}

export default loginMiddleware
