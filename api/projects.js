import { readdirSync, lstatSync } from 'fs';
import path from 'path';
import cors from 'cors';

const getDirectories = (srcPath) => readdirSync(srcPath)
  .filter((file) => lstatSync(path.join(srcPath, file)).isDirectory());

export default (app) => {
  app.get('/projects', cors(), (req, res) => {
    res.json(getDirectories('./public/projects'));
  });
};
