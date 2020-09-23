import { decorate, observable } from "mobx";

class MovieStore {
  movies = [];

  fetchTrendingMovies = () => {
    // don't use fetch, use axios with async/await instead.
    // REVIEW: Replace .then with async await
    // REVIEW: Add a loading
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=a6358e507fbfbbc6c17a38f10a736e3f`
    )
      .then((data) => data.json())
      .then((data) => {
        this.movies = data.results;
      });
  };
}

// This is gonna be used to Search for movies
/// `https://api.themoviedb.org/3/search/movie?api_key=a6358e507fbfbbc6c17a38f10a736e3f&language=en-US&query=${query}&page=1&include_adult=false`

decorate(MovieStore, {
  movies: observable,
});

const movieStore = new MovieStore();
movieStore.fetchTrendingMovies();

export default movieStore;
