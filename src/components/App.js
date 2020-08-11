import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import SearchBar from './SearchBar';
import '../App.css';

import TopNewsHeadline from './TopNewsHeadline'
import Bookmarks from './Bookmarks';
export class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <nav>
            <h1><center>News Website</center></h1>
            <ul>
              <li> <Link to="/" className="active">Home</Link></li>
              <li> <Link to="/Bookmarks">Bookmarks</Link></li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" >
            <SearchBar />
            <TopNewsHeadline />
          </Route>
          <Route path="/Bookmarks" component={Bookmarks} ></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
