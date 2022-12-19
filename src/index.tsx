import ReactDOM from 'react-dom/client';
import { jss } from 'react-jss';
import { App } from 'components';
import reset from './styles/reset.styles';

jss.createStyleSheet(reset).attach();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
