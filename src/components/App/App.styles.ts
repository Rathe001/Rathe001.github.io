import { createUseStyles } from 'react-jss';

const styles = {
  '@global': {
    body: {
      background: '#001122',
    },
  },
  pageWrap: {
    color: '#8BADC1',
    display: 'flex',
    fontFamily: '"Fira Code", monaco, Consolas, "Lucida Console", monospace',
  },
};

export default createUseStyles(styles);
