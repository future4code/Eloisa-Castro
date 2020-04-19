import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { SignupPage } from "../SignupPage";
import { LoginPage } from "../LoginPage";
import { ChangePasswordPage } from "../ChangePasswordPage";
import { VideoPage } from "../VideoPage";
import { NewVideoPage } from "../NewVideoPage";
import { FeedPage } from "../FeedPage";

export const routes = {
  loginPage: "/",
  signupPage: "/signup",
  changePassword: "/changePassword",
  newVideo: "/newVideo",
  videoFeed: "/videos",
  videoDetails: "/videoDetails",
  editVideo: "/editVideo",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.signupPage} component={SignupPage} />
        <Route exact path={routes.changePassword} component={ChangePasswordPage} />
        <Route exact path={routes.newVideo} component={NewVideoPage} />
        <Route exact path={routes.videoFeed} component={FeedPage} />
        <Route exact path={routes.videoDetails} component={VideoPage} />
        {/* <Route exact path={routes.editVideo} component={} /> */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;