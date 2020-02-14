import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./core";
import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import MoviePage from "./containers/MoviePage";
import SearchPage from "./containers/SearchPage";

export const App = () =>(
  <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact strict path="/">
          <SearchPage/>
        </Route>
        <Route exact strict path="/:type">
          <HomePage />
        </Route>
        <Route exact strict path="/genre/:id">
          <HomePage />
        </Route>
        <Route exact strict path="/search/:query">
          <HomePage />
        </Route>
        <Route path="/movie/:id">
          <MoviePage />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
