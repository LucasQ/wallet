import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Account from "../pages/account/Account";
import Home from "../pages/home/Home";

function Router({children}: any) {
  return (
    <BrowserRouter>
    {children}
    <main style={container}>
    <Switch>
    <Route path="/home">
    <Home />
    </Route>
    <Route path="/conta">
    <Account/>
    </Route>
    </Switch>
    </main>
    </BrowserRouter>
    );
  }

  const container = {
    width: '940px',
    margin: '0 auto',
  }

  export default Router;
