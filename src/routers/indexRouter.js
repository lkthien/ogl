import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from "../App";
import HomePage from "../pages/HomePage";
import InfoPage from "../pages/InfoPage";
import NotFoundPage from "../pages/NotFoundPage";

export default (
    <Route>
      {/* <Route path="login" component={LoginPage}/> */}
      <Route path="/" component={App}>
        {/* <IndexRoute component={HomePage}/> */}
        <Route path="home" component={HomePage}/>
        <Route path="info" component={InfoPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Route>
  );