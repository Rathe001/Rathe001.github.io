import useStyles from './TerminalWindow.styles';

const TerminalWindow = () => {
  const classes = useStyles();
  return (
    <div className={classes.terminal}>
      <p className={classes.green}>Compiled successfully!</p>
      <br />
      <p>
        You can now view
        <strong> tummel.io </strong>
        in the browser.
      </p>
      <br />
      <p>
        &nbsp;&nbsp;
        <strong>Local</strong>
        : http://localhost:3000
        <br />
        &nbsp;&nbsp;
        <strong>On Your Network</strong>: http://tummel.io
      </p>
      <br />
      <p>
        Note that the development build is not optimized.
        <br />
        To create a production build, <span className={classes.cyan}>use npm run build</span>.
      </p>
      <br />
    </div>
  );
};

export default TerminalWindow;
