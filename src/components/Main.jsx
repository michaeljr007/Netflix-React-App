import React from "react";
import axios from "axios";
import request from "../Requests";

const Main = () => {
  const [movies, setMovies] = React.useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer 67993dd19f83ba2fc3a878933b6fd850",
      },
    };

    axios
      .get(request.popular, options)
      .then((response) => response.data)
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, []);

  const shortenString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[500px] text-white mb-7">
      <div className="w-full h-full">
        <div className="w-full h-[550px] absolute bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-2xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 border-gray-300 rounded text-black py-2 px-6">
              Play
            </button>
            <button className="text-white rounded border-gray-300 py-2 px-5 ml-4 border">
              Watch Again
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-[80%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-1">
            {shortenString(movie?.overview, 135)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
