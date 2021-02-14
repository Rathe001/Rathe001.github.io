import express from 'express';
import createFooRoutes from './routes/foo';

const app = express();

createFooRoutes(app);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
