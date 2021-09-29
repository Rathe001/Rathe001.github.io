import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@media (max-width: 1000px)': {
    terminal: {
      display: 'none',
    },
  },
  cyan: {
    '&:hover': {
      textDecoration: 'underline',
    },
    color: '#7fdbca',
  },
  green: {
    color: '#22da6e',
  },
  terminal: {
    background: '#001122',
    borderTop: '1px solid #82AAFF',
    bottom: 0,
    fontSize: 12,
    marginTop: 30,
    paddingTop: 30,
    position: 'fixed',
    width: '100%',
  },
});

const TerminalWindow = () => {
  const classes = useStyles();
  return (
    <div className={classes.terminal}>
      <p className={classes.green}>Compiled successfully!</p>
      <p>
        You can now view
        <strong> astigmapro </strong>
        in the browser.
      </p>
      <p>
        &nbsp;&nbsp;
        <strong>Local</strong>
        :            http://localhost:3000
        <br />
        &nbsp;&nbsp;
        <strong>On Your Network</strong>
        :  http://astigmapro.com
      </p>
      <p>
        Note that the development build is not optimized.
        <br />
        To create a production build,
        {' '}
        <span className={classes.cyan}>use npm run build</span>
        .

      </p>
    </div>
  );
};

export default TerminalWindow;
