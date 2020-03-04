import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import AplicationPage from "../ApplicationPage";
import ApplicationForm from "../ApplicationForm";
import TripsListPage from "../TripsListPage";
import TripCreateForm from "../TripCreateForm";
import TripDetailsPage from "../TripDetailsPage";

export const routes = {
  root: "/",
  application: "/application",
  applicationForm: "/application-form",
  login: "/login",
  tripsList: "/trips/list",
  tripDetails: "/trips/details",
  tripCreate: "/trips/create"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.application} component={AplicationPage} />
        <Route exact path={routes.applicationForm} component={ApplicationForm} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.tripsList} component={TripsListPage} />
        <Route exact path={routes.tripDetails} component={TripDetailsPage} />
        <Route exact path={routes.tripCreate} component={TripCreateForm} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
