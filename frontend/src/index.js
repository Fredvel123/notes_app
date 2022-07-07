import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// main css style file
import './styles/main.css';
// redux - toolkit
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
