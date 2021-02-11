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

  useEffect(() => {
    axios.get('https://rathe001-github.herokuapp.com/api/projects').then((rs) => {
      console.log(rs);
      setProjects(rs.data);
    });
  }, []);

  return (
    <div className={classes.hello}>
      {projects.map((project) => (
        <div><a href={`/${project}`}>{project}</a></div>
      ))}
    </div>
  );
};

export default App;
