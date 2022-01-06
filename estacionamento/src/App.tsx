import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate, Link, Outlet } from 'react-router-dom';

//redux stuff
import { Provider } from 'react-redux';
import store from './domain/redux/store';
import { CheckAuthentication } from './core/helpers/CheckAuthentication';
import AppRouting from './core/config/router/router.config';

const App: React.FC = () => {
    useEffect(() => {
        CheckAuthentication();
    }, []);

    return (
        <>
            <Provider store={store}>
                <AppRouting />
            </Provider>
        </>
    );
}

const Public = () => <div>public</div>;
const Private = () => <div>private</div>;

function MyMenu() {
return (
    <nav>
    <Link to="/">Public</Link>
    {" | "}
    <Link to="/private-outlet">Private Using Outlet</Link>
    </nav>
);
}
  
export default App;