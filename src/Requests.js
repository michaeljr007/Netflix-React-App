const request = {
  popular: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  topRated:
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  trending: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  horror:
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&with_genres=27",
  upComing: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
};

export default request;
