import { useState, useEffect } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';

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
    <div className={classes.hello}>
      {error && (<div>{error}</div>)}
      <ul>
        {projects.map((project) => (
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://astigmapro.com/${project}`}
            >
              {project}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
