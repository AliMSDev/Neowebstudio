import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import { MenuProvider } from './components/__Context/menuContext';
import { LangProvider } from './components/__Context/langContext';

// import default styles from folder assest/default
import './assest/default/font.scss';
import './assest/default/grid.scss';
import './assest/default/media.scss';
import './assest/default/reset.scss';
import './assest/default/var.css';
import './assest/default/animation.scss';

ReactDOM.render(
  <React.StrictMode>
      <LangProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </LangProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
