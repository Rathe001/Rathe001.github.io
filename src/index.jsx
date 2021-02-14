import ReactDOM from 'react-dom';
import { jss } from 'react-jss';
import { reset, typography } from 'jss-reset';
import App from 'components/App';

jss.createStyleSheet(reset).attach();
jss.createStyleSheet(typography).attach();

ReactDOM.render(<App />, document.getElementById('root'));
