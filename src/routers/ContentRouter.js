import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import InfoPage from "../pages/InfoPage";
import NotFoundPage from "../pages/NotFoundPage";

const ContentRouter = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/info" component={InfoPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </React.Fragment>
    )
}
export default ContentRouter;