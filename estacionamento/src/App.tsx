import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate, Link, Outlet } from 'react-router-dom';

//redux stuff
import { Provider } from 'react-redux';
import store from './domain/redux/store';
import { CheckAuthentication } from './core/helpers/CheckAuthentication';
import AppRouter from './core/config/router/app.router';

const App: React.FC = () => {
    useEffect(() => {
        CheckAuthentication();
    }, []);

    return (
        <>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </>
    );
}
  
export default App;