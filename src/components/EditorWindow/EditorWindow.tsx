import { useState, useEffect } from 'react';
import axios from 'axios';
import { TerminalWindow } from 'components';
import { IGitHubUserRepos } from 'types';
import useStyles from './EditorWindow.styles';

const App = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState<IGitHubUserRepos[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get('https://api.github.com/users/Rathe001/repos')
      .then((rs) =>
        rs.data
          .filter((repo: IGitHubUserRepos) => repo.has_pages && repo.name !== 'Rathe001.github.io')
          .map((repo: IGitHubUserRepos) => ({ description: repo.description, name: repo.name }))
      )
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
            <span className={classes.line}>
              <span className={classes.gray}>{` *  _____                     _   _`}</span>
            </span>
            <span className={classes.line}>
              <span className={classes.gray}>{` * |_   _|  _ _ __  _ __  ___| | (_)`}</span>
            </span>
            <span className={classes.line}>
              <span className={classes.gray}>{` *   | || || | '  \\| '  \\/ -_) |_| / _ \\`}</span>
            </span>
            <span className={classes.line}>
              <span className={classes.gray}>{` *   |_| \\_,_|_|_|_|_|_|_\\___|_(_)_\\___/`}</span>
            </span>
            <span className={classes.line}>
              <span className={classes.gray}> * </span>
            </span>
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

                  <span className={classes.line}>{`<h1>Error: ${error}</h1>`}</span>

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
                          href={`http://tummel.io/${project.name}/`}
                          rel="noopener noreferrer"
                          target="_blank"
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
                        {project.description
                          .split(/[,]/)
                          .join(',\n')
                          .split(/[.]/)
                          .join('.\n')
                          .split(/\r?\n/)
                          .filter((line) => !!line)
                          .map((descLine) => (
                            <span className={classes.line}>
                              <span className={classes.white}>{descLine.trim()}</span>
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
