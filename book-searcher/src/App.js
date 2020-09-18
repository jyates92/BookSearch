import React from "react";
import "./App.css";
import Savedbooks from "./pages/savedBooks";
import Searchbooks from "./pages/searchBooks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 900px;
  padding: 10px;
  margin: 0 auto;
  a {
    margin-right: 10px;
    text-decoration: none;
  }
`;

const Header = styled.header`
  margin-bottom: 20px;
  border-bottom: 1px solid black;
  width: 100%;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <Router>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/my-books">My Books</Link>
        </Nav>
      </Header>
      <Switch>
        <Route path="/my-books">
          <Savedbooks />
        </Route>
        <Route path="/">
          <Searchbooks />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
