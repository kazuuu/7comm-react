import AboutPage from "presentation/pages/about.page";
import HomePage from "presentation/pages/home.page";
import NotFoundPage from "presentation/pages/not-found.page.";
import React from "react";
import { Route, Switch } from "react-router-dom";

const ContentComponent = props => (
    <main className="ContentComponent">
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/*">
                <NotFoundPage />
            </Route>
        </Switch>
    </main>
);

export default ContentComponent;