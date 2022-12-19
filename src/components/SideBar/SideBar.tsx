import useStyles from './SideBar.styles';

const SideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <span className={classes.title}>Open Editors</span>
      <ul>
        <li>
          <span>App.tsx</span>
          <small className={classes.path}>src/components/App</small>
        </li>
      </ul>
      <span className={classes.title}>Tummel.io</span>
      <ul>
        <li className={classes.closed}>
          <span>build</span>
        </li>
        <li className={classes.closed}>
          <span>node_modules</span>
        </li>
        <li className={classes.closed}>
          <span>public</span>
        </li>
        <li className={classes.open}>
          <span>
            <strong>src</strong>
          </span>
          <ul>
            <li className={classes.open}>
              <span>
                <strong>components</strong>
              </span>
              <ul>
                <li className={classes.open}>
                  <span>
                    <strong>App</strong>
                  </span>
                  <ul>
                    <li className={classes.selected}>
                      <strong>App.tsx</strong>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>package.json</li>
      </ul>
    </div>
  );
};

export default SideBar;
