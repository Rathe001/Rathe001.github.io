import cors from 'cors';

export default (app) => {
  app.get('/pages', cors(), (req, res) => {
    res.json({ foo: 'bar' });
  });
};
