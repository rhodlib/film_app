import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { Provider } from "react-redux";
import store from "./core";
import Layout from "./components/Layout";
import HomePage from "./containers/HomePage";
import MoviePage from "./containers/MoviePage";
import SearchPage from "./containers/SearchPage";
import NotFound from "./components/NotFound";

export const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact strict path="/">
            <SearchPage />
          </Route>
          <Route exact strict path="/list/:type">
            <HomePage />
          </Route>
          <Route exact strict path="/genre/:category">
            <HomePage />
          </Route>
          <Route exact strict path="/search/:query">
            <HomePage />
          </Route>
          <Route path="/movie/:id">
            <MoviePage />
          </Route>
          <Route>
            <NotFound name={"Page not found"} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
