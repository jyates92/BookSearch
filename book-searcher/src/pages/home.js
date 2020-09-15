import React from "react";
// import CreatePostForm from "../components/CreatePostForm";
// import PostsList from "../components/PostsList";
import Nav from "../components/nav";
import Container from "../components/container";
import Search from "../components/search";
import Results from "../components/results";
import Jumbotron from "../components/jumbotron";

const Home = () => {
  return (
    <>
      <Nav />
      <Container>
        <Jumbotron message="HELLO" />
        <Search />
        <Results />
      </Container>
    </>
  );
};

export default Home;
