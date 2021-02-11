import express from 'express';
import cors from 'cors';
import projects from './projects';

const router = express.Router();

const app = express();

projects(router);

app.use(cors());
app.use('/api', router);

app.listen(3001, () => {
  console.log('Server running on port 3000');
});
