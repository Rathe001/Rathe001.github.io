import { useState, useEffect } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const useStyles = createUseStyles({
  '@global': {},
  hello: {},
});

const App = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/Rathe001/repos')
      .then((rs) => rs.data
        .filter((repo) => repo.has_pages && repo.name !== 'Rathe001.github.io')
        .map((repo) => repo.name))
      .then((pages) => {
        setProjects(pages);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, []);

  return (
    <Router>
      <div className={classes.hello}>
        {error && (<div>{error}</div>)}
        <ul>
          {projects.map((project) => (
            <li>
              <Link to={`/${project}`}>{project}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Switch>
        {projects.map((project) => (
          <Route
            path="/privacy-policy"
            component={() => {
              window.location.href = `https://astigmapro.com.com/${project}`;
              return null;
            }}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
