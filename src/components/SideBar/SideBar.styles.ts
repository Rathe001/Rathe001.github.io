import { createUseStyles } from 'react-jss';

const styles = {
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
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    background: '#001122',
    fontFamily: '"Fira Code", monaco, Consolas, "Lucida Console", monospace',
    fontSize: 14,
    left: 0,
    lineHeight: '1.5em',
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
};

export default createUseStyles(styles);
