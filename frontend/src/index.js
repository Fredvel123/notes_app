import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// main css style file
import './styles/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
