import { readdirSync, lstatSync } from 'fs';
import path from 'path';

const getDirectories = (srcPath) => readdirSync(srcPath)
  .filter((file) => lstatSync(path.join(srcPath, file)).isDirectory());

export default (app) => {
  app.get('/projects', (req, res) => {
    res.json(getDirectories('./projects'));
  });
};
