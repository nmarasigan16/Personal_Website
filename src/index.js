import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import font_config from './font_config';
import './index.css';


render(
  <WebfontLoader config={font_config}>
    <App />
  </WebfontLoader>, 
  document.getElementById('root'));
registerServiceWorker();
