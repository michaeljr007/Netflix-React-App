import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Up Coming" requestURL={request.upComing} />
      <Row rowID="2" title="Popular" requestURL={request.popular} />
      <Row rowID="3" title="Trending" requestURL={request.trending} />
      <Row rowID="4" title="Horror" requestURL={request.horror} />
      <Row rowID="5" title="Top Rated" requestURL={request.topRated} />
    </div>
  );
};

export default Home;
