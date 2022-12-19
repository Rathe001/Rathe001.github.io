import { createUseStyles } from 'react-jss';

const styles = {
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
};

export default createUseStyles(styles);
