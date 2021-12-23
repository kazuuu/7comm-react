import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuComponent from 'presentation/components/menu.component';
import ContentComponent from 'presentation/components/content.component';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Router>
        <ContentComponent />
      </Router>
    </div>
  );
}
