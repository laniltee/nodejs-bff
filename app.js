// Dependancies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Express
const app = express();

// Middleware
app.use(cors());
app.use(morgan('combined'));

// Routes
import routes from './routes';
app.use('/api', routes);

// App Startup
app.listen(process.env.PORT, () => {
  console.info(`BFF running on port ${process.env.PORT}`);
});
