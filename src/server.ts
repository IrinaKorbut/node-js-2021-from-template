// const { PORT } = require('./common/config.js');
import { config } from './common/config.js';

const { PORT } = config;
const app = require('./app.js');

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
