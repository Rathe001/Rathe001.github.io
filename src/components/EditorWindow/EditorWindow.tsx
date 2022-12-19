/* eslint-disable no-irregular-whitespace */
import { useState, useEffect } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import { TerminalWindow } from 'components';
import { IGitHubUserRepo } from 'types';
import useStyles from './EditorWindow.styles';

const App = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState<IGitHubUserRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://api.github.com/users/Rathe001/repos')
      .then((rs: { data: IGitHubUserRepo[] }) =>
        rs.data
          .filter((repo) => !repo.private && repo.has_pages && repo.name !== 'Rathe001.github.io')
          .sort((a, b) => {
            return Date.parse(b.updated_at as string) - Date.parse(a.updated_at as string);
          })
          .map((repo) => ({ description: repo.description, name: repo.name }))
      )
      .then((pages) => {
        setProjects(pages);
      })
      .catch((err) => {
        setError(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={classes.editorWindow}>
      <div className={classes.lineWrap}>
        <span className={classes.line}>
          <span className={classes.purple}>import </span>
          <span className={classes.white}>projects</span>
          <span className={classes.purple}> from </span>
          <span className={classes.white}>&apos;</span>
          <span className={classes.yellow}>./githubApi</span>
          <span className={classes.white}>&apos;;</span>
        </span>
        <span className={classes.line}>&nbsp;</span>
        <div className={classes.comment}>
          <span className={classes.line}>{'/**'}</span>
          <span className={classes.line}> * ▀█▀ █░█ █▀▄▀█ █▀▄▀█ █▀▀ █░░ ░ █ █▀█</span>
          <span className={classes.line}> * ░█░ █▄█ █░▀░█ █░▀░█ ██▄ █▄▄ ▄ █ █▄█</span>
          <span className={classes.line}>{' */'}</span>
        </div>
        <span className={classes.line}>
          <span className={classes.purple}>const </span>
          <span className={classes.blue}>App</span>
          <span className={classes.purple}> = </span>
          <span className={classes.white}>()</span>
          <span className={classes.purple}>{' => '}</span>
          <span className={classes.white}>(</span>
        </span>

        <div className={classes.indent1}>
          <span className={classes.line}>
            <span className={classes.cyan}>{'<div '}</span>
            <span className={classes.green}>className</span>
            <span className={classes.purple}>=</span>
            <span className={classes.red}>{'{'}</span>
            <span className={classes.cyan}>classes.app</span>
            <span className={classes.red}>{'}'}</span>
            <span className={classes.cyan}>{'>'}</span>
          </span>
          <div className={classes.indent2}>
            <span className={classes.line}>
              <span className={classes.cyan}>{'<h1>'}</span>
              <span
                className={classes.white}
              >{`Josh Tummel's experimental development playground and sandbox`}</span>
              <span className={classes.cyan}>{'</h1>'}</span>
            </span>

            {error && (
              <span className={classes.line}>
                <span className={classes.cyan}>{'<p>'}</span>
                <span className={classes.white}>Error loading GitHub projects!</span>
                <span className={classes.cyan}>{'</p>'}</span>
              </span>
            )}
            {loading && (
              <span className={classes.line}>
                <span className={classes.cyan}>{'<p>'}</span>
                <span className={classes.white}>Loading GitHub projects...</span>
                <span className={classes.cyan}>{'</p>'}</span>
              </span>
            )}

            {!error && !loading && (
              <>
                <span className={classes.line}>
                  <span className={classes.cyan}>{'<h2>'}</span>
                  <span className={classes.white}>List of GitHub projects</span>
                  <span className={classes.cyan}>{'</h2>'}</span>
                </span>
                <span className={classes.line}>
                  <span className={classes.cyan}>{'<ul>'}</span>
                </span>
                {projects.map((project) => (
                  <div className={classes.indent3}>
                    <span className={classes.line}>
                      <span className={classes.cyan}>{'<li>'}</span>
                    </span>
                    <div className={classes.indent4}>
                      <span className={classes.line}>
                        <span className={classes.cyan}>{'<h3>'}</span>
                        <a
                          className={classnames(classes.white, classes.link)}
                          href={`http://tummel.io/${project.name}/`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {project.name?.replace('rathe001-', '').split('-').join(' ')}
                        </a>
                        <span className={classes.cyan}>{'</h3>'}</span>
                        <span className={classes.comment}>{` /** This is a link! */`}</span>
                      </span>

                      <span className={classes.line}>
                        <span className={classes.cyan}>{'<p>'}</span>
                      </span>
                      <div className={classes.indent5}>
                        {project.description
                          ?.split(/[,]/)
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
                  </div>
                ))}
                <span className={classes.line}>
                  <span className={classes.cyan}>{'</ul>'}</span>
                </span>
              </>
            )}
          </div>
          <span className={classes.line}>
            <span className={classes.cyan}>{'</div>'}</span>
          </span>
        </div>
      </div>

      <span className={classes.line}>
        <span className={classes.white}>)</span>
        <span className={classes.purple}>;</span>
      </span>
      <span className={classes.line}>&nbsp;</span>

      <span className={classes.line}>
        <span className={classes.purple}>export default </span>
        <span className={classes.white}>App;</span>
      </span>

      <span className={classes.line}>&nbsp;</span>

      <TerminalWindow />
    </div>
  );
};

export default App;
