import React from 'react';
import './app.css';
import AppRoutingContent from './app.routing';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutingContent />
      </Router>
    </div>
  );
}
