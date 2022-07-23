import { StrictMode } from 'react';
import {HashRouter }from 'react-router-dom';
import {createRoot} from 'react-dom/client'
import './styles.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
