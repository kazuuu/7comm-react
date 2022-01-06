import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuComponent from "../../../presentation/components/menu.component";
import PublicOutlet from "./PublicOutlet";
import HomePage from "../../../presentation/pages/home/home.page";
import LoginPage from "../../../presentation/pages/login/login.page";
import DashPage from "../../../presentation/pages/dash/dash.page";
import PrivateOutlet from "./PrivateOutlet";


const AppRouting: React.FC<any>   = () => (
    <BrowserRouter>
        <MenuComponent />
        <Routes>
            <Route path="/" element={<PublicOutlet />}>
                <Route path="" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/dash" element={<PrivateOutlet />}>
                <Route path="" element={<DashPage />} />
            </Route>
        </Routes>
    </BrowserRouter>        
);

export default AppRouting;