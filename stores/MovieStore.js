import { decorate, observable } from "mobx";

class MovieStore {
  movies = [];

  // this name doesn't tell me exactly what it's for
  // maybe rename to `fetchTrendingMovies`?
  // this name tells you exactly what this function does.
  latestList = () => {
    // don't use fetch, use axios with async/await instead.
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=a6358e507fbfbbc6c17a38f10a736e3f`
    )
      .then((data) => data.json())
      .then((data) => {
        this.movies = data.results;
        // remove console logs
        console.log("MovieStore -> latestList -> movies", movies);
      });
  };
}

// This is gonna be used to Search for movies
/// `https://api.themoviedb.org/3/search/movie?api_key=a6358e507fbfbbc6c17a38f10a736e3f&language=en-US&query=${query}&page=1&include_adult=false`

decorate(MovieStore, {
  movies: observable,
});

const movieStore = new MovieStore();
movieStore.latestList();

export default movieStore;
