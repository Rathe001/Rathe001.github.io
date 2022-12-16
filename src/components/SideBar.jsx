import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@media (max-width: 1000px)': {
    sideBar: {
      display: 'none',
    },
  },
  closed: {
    '&::before': {
      content: '">"',
    },
  },
  open: {
    '&::before': {
      content: '">"',
      transform: 'rotate(90deg)',
    },
  },
  path: {
    paddingLeft: 5,
  },
  selected: {
    background: '#7e57c25a',
  },
  sideBar: {
    '& li': {
      '&::before': {
        display: 'inline-block',
        left: 0,
        position: 'absolute',
        top: 0,
      },
      paddingLeft: 14,
      position: 'relative',
    },
    '& small': {
      opacity: 0.5,
    },
    '& span': {
      marginBottom: 0,
    },
    '& ul': {
      marginLeft: 0,
    },
    background: '#001122',
    fontSize: 14,
    left: 0,
    minWidth: 200,
    padding: 20,
    position: 'fixed',
    top: 0,
  },
  title: {
    fontSize: 11,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
});

const SideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <span className={classes.title}>Open Editors</span>
      <ul>
        <li>
          <span>App.jsx</span>
          <small className={classes.path}>src/components/App</small>
        </li>
      </ul>
      <span className={classes.title}>Tummel.io</span>
      <ul>
        <li className={classes.closed}><span>build</span></li>
        <li className={classes.closed}><span>node_modules</span></li>
        <li className={classes.closed}><span>public</span></li>
        <li className={classes.open}>
          <span><strong>src</strong></span>
          <ul>
            <li className={classes.open}>
              <span><strong>components</strong></span>
              <ul>
                <li className={classes.open}>
                  <span><strong>App</strong></span>
                  <ul>
                    <li className={classes.selected}><strong>Website.jsx</strong></li>
                    <li>Website.styles.js</li>
                    <li>Website.spec.jsx</li>
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
