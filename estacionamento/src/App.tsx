import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate, Link, Outlet } from 'react-router-dom';

//redux stuff
import { Provider } from 'react-redux';
import store from './data/sources/redux/store';
import AppRouter from './core/config/router/app.router';
import AuthService from './domain/services/auth.service';

const App: React.FC = () => {
    useEffect(() => {
        let authService: AuthService = new AuthService();

        authService.checkAuthentication();
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