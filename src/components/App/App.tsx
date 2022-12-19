import { SideBar, EditorWindow } from 'components';
import useStyles from './App.styles';

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
