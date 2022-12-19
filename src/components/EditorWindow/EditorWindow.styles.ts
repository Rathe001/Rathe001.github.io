import { createUseStyles } from 'react-jss';

const styles = {
  '@media (max-width: 1000px)': {
    editorWindow: {
      padding: '0 !important',
    },
  },
  blue: {
    '&:hover': {
      textDecoration: 'underline',
    },
    color: '#82AAFF',
  },
  comment: {
    color: '#637777',
    lineHeight: '1em',
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
    padding: '20px 20px 225px 240px',
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
      '&:hover': {
        textDecoration: 'underline',
      },
      fontWeight: 700,
      textDecoration: 'none',
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
      background: 'rgba(0, 0, 0, 0.2)',
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
  link: {
    textTransform: 'capitalize',
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
};

export default createUseStyles(styles);
