import app from './app';
import { config } from './common/config';
import { TryDBConnect } from './common/helpers/db'

const { PORT } = config;

const startConnection = async () => {
  try {
    await TryDBConnect();
    console.log('Successfully connected!')
  } catch (err) {
    console.error('error server', err);
  }
  app.listen(config.PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`),
  );
};
startConnection();

