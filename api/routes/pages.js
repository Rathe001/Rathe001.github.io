import cors from 'cors';
import axios from 'axios';

export default (app) => {
  app.get('/pages', cors(), (req, res) => {
    axios.get('https://api.github.com/users/Rathe001/repos').then((rs) => rs.data.filter((repo) => repo.has_pages).map((repo) => repo.name)).then((pages) => {
      res.json(pages);
    });
  });
};
