import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/assets/css/index.less';
import { store } from './store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement //类型断言
);
root.render(
  //严格模式
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
