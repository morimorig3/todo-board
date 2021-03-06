import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import store from 'store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
