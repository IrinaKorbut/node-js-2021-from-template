import { getRepository} from 'typeorm';
import bcrypt from 'bcrypt';
import app from './app';
import { config } from './common/config';
import { TryDBConnect } from './common/helpers/db'
import User from './entities/user'

const { PORT } = config;

const startConnection = async () => {
  try {
    await TryDBConnect();
    const userRepository = getRepository(User);
    const adminCreate = await userRepository.create({
      name: 'admin',
      login: 'admin',
      password: bcrypt.hashSync('admin', 10)
    })
    await userRepository.save(adminCreate);
    console.log('Successfully connected!')
  } catch (err) {
    console.error('error server', err);
  }
  app.listen(config.PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`),
  );
};
startConnection();

