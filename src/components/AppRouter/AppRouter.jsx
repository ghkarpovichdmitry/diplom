import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Tasks from "../../pages/Tasks";
import Users from "../../pages/Users";

const AppRouter = () => {
    return (
        <main id="page-main">
            <div className="container">
                <Switch>
                    <Route path="/signIg" exact>
                        <Login />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/signUp" exact>
                        <Register />
                    </Route>
                    <Route path="/tasks" exact>
                        <Tasks />
                    </Route>
                    <Route path="/users" exact>
                        <Users />
                    </Route>
                    <Redirect to="/signIg"/>
                </Switch>
            </div>
        </main>
    );
};

export default AppRouter;