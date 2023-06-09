import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './assets/css/index.less';
import App from '@/App';
import { theme } from '@/assets/theme';
import { store } from './store';
import '@/assets/css/index.less';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement //类型断言
);
interface Props {
  childern?: ReactNode;
}
const AppWithUI: FC<Props> = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};
root.render(<AppWithUI />);
