import React from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, requestURL, rowID }) => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzk5M2RkMTlmODNiYTJmYzNhODc4OTMzYjZmZDg1MCIsInN1YiI6IjY0ZTJlMjhiMWQxYmY0MDEwMTE5NWUxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._OLGQ938Ljdr7aP1aC96Rt5w40Hv3-HsccezwFnV9SY",
      },
    };

    axios
      .get(requestURL, options)
      .then((response) => response.data)
      .then((response) => setMovies(response.results))
      .catch((err) => console.log(err));
  }, [requestURL]);

  const scrollLeft = () => {
    let slider = document.querySelector("#slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const scrollRight = () => {
    let slider = document.querySelector("#slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="my-5">
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="items-center relative flex group">
        <MdChevronRight
          onClick={scrollLeft}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <MdChevronLeft
          onClick={scrollRight}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
