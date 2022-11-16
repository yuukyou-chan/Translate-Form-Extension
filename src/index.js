import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App isExt={false}/>, document.getElementById('root'));
registerServiceWorker();
