import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './Landing'
import RecipePage from './RecipePage';
import About from './About';
import SearchResults from './SearchResults';
import json from './data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/>
);

