import express from 'express';
import createPagesRoutes from './routes/pages';

const app = express();

createPagesRoutes(app);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on port ${process.env.PORT || 3001}`);
});
