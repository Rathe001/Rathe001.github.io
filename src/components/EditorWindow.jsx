import { useState, useEffect } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';
import logoBase64 from 'constants/logoBase64';
import TerminalWindow from 'components/TerminalWindow';

const useStyles = createUseStyles({
  blue: {
    '&:hover': {
      textDecoration: 'underline',
    },
    color: '#82AAFF',
  },
  comment: {
    color: '#637777',
    fontSize: 13,
  },
  cyan: {
    color: '#7fdbca',
  },
  editorWindow: {
    '& span': {
      fontSize: '13px !important',
      marginBottom: 0,
    },
    color: '#f2f2f2',
    flex: 1,
    fontSize: '13px !important',
    padding: 20,
  },
  gray: {
    color: '#637777',
  },
  green: {
    '&:hover': {
      textDecoration: 'underline',
    },
    color: '#9CCC65',
  },
  indent1: {
    '& $line': {
      paddingLeft: 60,
    },
  },
  indent2: {
    '& $line': {
      paddingLeft: 80,
    },
  },
  indent3: {
    '& $line': {
      paddingLeft: 100,
    },
  },
  indent4: {
    '& $line': {
      paddingLeft: 120,
    },
  },
  indent5: {
    '& $line': {
      paddingLeft: 140,
    },
  },
  indent6: {
    '& $line': {
      paddingLeft: 160,
    },
  },
  line: {
    '& a': {
      fontSize: 13,
    },
    '&::before': {
      content: 'counter(line-numbering)',
      counterIncrement: 'line-numbering',
      left: 0,
      opacity: 0.5,
      paddingRight: '1em',
      position: 'absolute',
      textAlign: 'right',
      whiteSpace: 'nowrap',
      width: '1.5em',
    },
    '&:hover': {
      '&::before': {
        color: '#fff',
        opacity: 1,
      },
      background: '#000',
    },
    display: 'block',
    fontSize: 13,
    marginBottom: 0,
    paddingLeft: 40,
    position: 'relative',
    whiteSpace: 'pre',
  },
  lineWrap: {
    counterReset: 'line-numbering',
    whiteSpace: 'pre',
    wordBreak: 'break-word',
  },
  purple: {
    color: '#C792EA',
  },
  red: {
    color: '#ff5874',
  },
  white: {
    color: '#fff',
  },
  yellow: {
    color: '#ffcb8b',
  },
});

const App = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios.get('https://api.github.com/users/Rathe001/repos')
      .then((rs) => rs.data
        .filter((repo) => repo.has_pages && repo.name !== 'Rathe001.github.io')
        .map((repo) => ({ description: repo.description, name: repo.name })))
      .then((pages) => {
        setProjects(pages);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }, []);

  return (
    <div className={classes.editorWindow}>
      <div className={classes.lineWrap}>

        <span className={classes.line}>
          <span className={classes.purple}>const </span>
          <span className={classes.blue}>Website</span>
          <span className={classes.purple}> = </span>
          <span className={classes.white}>(classes, astigmaproLogo, projects)</span>
          <span className={classes.purple}>{' => {'}</span>
        </span>

        <div className={classes.indent1}>
          <div className={classes.comment}>
            <span className={classes.line}>{'/**'}</span>
            <span className={classes.line}>{' * @param {string} logoBase64'}</span>
            <span className={classes.line}>{' * @example'}</span>
            {atob(logoBase64).split(/\r?\n/).map((line) => (
              <span className={classes.line}><span className={classes.gray}>{` * ${line}`}</span></span>
            ))}
            <span className={classes.line}>{' */'}</span>
          </div>
          <span className={classes.line}>
            <span className={classes.purple}>const </span>
            <span className={classes.blue}>showAsciiLogo</span>
            <span className={classes.purple}> = </span>
            <span className={classes.white}>(logoBase64)</span>
            <span className={classes.purple}>{' => '}</span>
            <span className={classes.blue}>atob</span>
            <span className={classes.white}>(logoBase64)</span>
            <span className={classes.purple}>;</span>
          </span>

          <span className={classes.line}>&nbsp;</span>

          <span className={classes.line}>
            <span className={classes.purple}>return </span>
            <span className={classes.white}>(</span>
          </span>

          <div className={classes.indent2}>
            <span className={classes.line}>
              <span className={classes.cyan}>{'<div '}</span>
              <span className={classes.green}>className</span>
              <span className={classes.purple}>=</span>
              <span className={classes.red}>{'{'}</span>
              <span className={classes.cyan}>classes.app</span>
              <span className={classes.red}>{'}'}</span>
              <span className={classes.cyan}>{'>'}</span>
            </span>
            <div className={classes.indent3}>
              <span className={classes.line}>
                <span className={classes.cyan}>{'<h1>'}</span>
                <span className={classes.red}>{'{'}</span>
                <span className={classes.blue}>showAsciiLogo</span>
                <span className={classes.white}>(astigmaproLogo)</span>
                <span className={classes.red}>{'}'}</span>
                <span className={classes.cyan}>{'</h1>'}</span>
              </span>

              <span className={classes.line}>
                <span className={classes.cyan}>{'<h2>'}</span>
                <span className={classes.white}>List of Projects</span>
                <span className={classes.cyan}>{'</h2>'}</span>
              </span>

              <span className={classes.line}>
                <span className={classes.cyan}>{'<ul>'}</span>
              </span>

              {error && (
                <>
                  <span className={classes.line}>&nbsp;</span>

                  <span className={classes.line}>
                    {`<h1>Error: ${error}</h1>`}
                  </span>

                  <span className={classes.line}>&nbsp;</span>
                </>
              )}
              <div className={classes.indent4}>
                {projects.map((project) => (
                  <>
                    <span className={classes.line}>
                      <span className={classes.cyan}>{'<li>'}</span>
                    </span>
                    <div className={classes.indent5}>
                      <span className={classes.line}>
                        <span className={classes.cyan}>{'<h3>'}</span>
                        <span className={classes.red}>{'{'}</span>
                        <span className={classes.green}>projects[&apos;</span>
                        <a
                          className={classes.cyan}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`http://www.astigmapro.com/${project.name}/`}
                        >
                          {project.name}
                        </a>
                        <span className={classes.green}>&apos;]</span>
                        <span className={classes.red}>{'}'}</span>
                        <span className={classes.cyan}>{'</h3>'}</span>
                      </span>

                      <span className={classes.line}>
                        <span className={classes.cyan}>{'<p>'}</span>
                      </span>
                      <div className={classes.indent6}>
                        {project.description.split(/[,]/).join(',\n').split(/[.]/).join('.\n')
                          .split(/\r?\n/)
                          .filter((line) => !!line)
                          .map((descLine) => (
                            <span className={classes.line}>
                              <span className={classes.white}>
                                {descLine.trim()}
                              </span>
                            </span>
                          ))}
                      </div>
                      <span className={classes.line}>
                        <span className={classes.cyan}>{'</p>'}</span>
                      </span>

                    </div>
                    <span className={classes.line}>
                      <span className={classes.cyan}>{'</li>'}</span>
                    </span>
                  </>
                ))}
              </div>

              <span className={classes.line}>
                <span className={classes.cyan}>{'</ul>'}</span>
              </span>
            </div>
            <span className={classes.line}>
              <span className={classes.cyan}>{'</div>'}</span>
            </span>
          </div>

          <span className={classes.line}>
            <span className={classes.white}>)</span>
            <span className={classes.purple}>;</span>
          </span>
        </div>
      </div>
      <span className={classes.line}>
        <span className={classes.purple}>{'}'}</span>
      </span>

      <span className={classes.line}>&nbsp;</span>

      <span className={classes.line}>
        <span className={classes.purple}>export default </span>
        <span className={classes.white}>Website;</span>
      </span>

      <span className={classes.line}>&nbsp;</span>

      <TerminalWindow />
    </div>
  );
};

export default App;
