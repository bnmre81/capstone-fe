import { decorate, observable } from "mobx";

class MovieStore {
  movies = [];
  randomMoviesList = [];

  fetchRandomList = () => {
    result = [];
    for (let i = 0; i < 10; i++) {
      result.push(Math.floor(Math.random() * this.movies.length));
    }

    console.log("these mvoeis", this.movies);
    result.forEach((element) => {
      this.randomMoviesList.push(this.movies[element]);
    });
  };

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
        this.fetchRandomList();
      });
  };
}

// This is gonna be used to Search for movies
/// `https://api.themoviedb.org/3/search/movie?api_key=a6358e507fbfbbc6c17a38f10a736e3f&language=en-US&query=${query}&page=1&include_adult=false`

decorate(MovieStore, {
  movies: observable,
  randomMoviesList: observable,
});

const movieStore = new MovieStore();
movieStore.fetchTrendingMovies();

export default movieStore;
