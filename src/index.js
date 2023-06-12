import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { App } from 'components/App/App';

import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';

import 'modern-normalize';
import { GlobalStyles } from './styles/GlobalStyles.styled';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Global styles={GlobalStyles} />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
