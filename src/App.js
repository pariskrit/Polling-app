import React, { Component, useEffect, useState } from "react";
import "./App.css";
import { Route, withRouter, Switch } from "react-router-dom";

import { getCurrentUser } from "./util/APIUtils";
import { ACCESS_TOKEN } from "./constants";

import LoadingIndicator from "./common/LoadingIndicator";
import Navbar from "./components/Navbar/Navbar";
import PollList from "./components/poll/PollList";

function App(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function loadCurrentUser() {
    setIsLoading(true);
    getCurrentUser()
      .then((response) => {
        setCurrentUser(response);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }

  function handleLogout(
    redirectTo = "/",
    notificationType = "success",
    description = "You're successfully logged out."
  ) {
    localStorage.removeItem(ACCESS_TOKEN);

    setCurrentUser(null);
    setIsAuthenticated(false);
    props.history.push(redirectTo);
  }

  function handleLogin() {
    alert("successfully logged in");
    loadCurrentUser();
    props.history.push("/");
  }

  // useEffect(() => {

  //   loadCurrentUser();
  // },[])

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <PollList
              isAuthenticated={isAuthenticated}
              currentUser={currentUser}
              handleLogout={handleLogout}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
