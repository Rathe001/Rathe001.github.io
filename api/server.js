import express from 'express';
import cors from 'cors';
import projects from './projects';

const app = express();

projects(app);

app.use(cors());
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on port ${process.env.PORT || 3001}`);
});
