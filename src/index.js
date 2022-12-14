import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '~/store/reducer/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
