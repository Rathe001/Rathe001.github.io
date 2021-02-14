import { createUseStyles } from 'react-jss';
import EditorWindow from 'components/EditorWindow';
import SideBar from 'components/SideBar';

const useStyles = createUseStyles({
  '@global': {
    body: {
      background: '#001122',
    },
  },
  pageWrap: {
    color: '#8BADC1',
    display: 'flex',
    fontFamily: 'Fira Code, sans-serif',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageWrap}>
      <SideBar />
      <EditorWindow />
    </div>
  );
};

export default App;
