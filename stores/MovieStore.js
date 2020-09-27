import { decorate, observable } from "mobx";

class MovieStore {
  includeG = null;
  excludeG = null;
  movies = [];
  randomMoviesList = [];

  fetchRandomList = () => {
    result = [];
    for (let i = 0; i < 10; i++) {
      result.push(Math.floor(Math.random() * this.movies.length));
    }
    let unique = [...new Set(result)];
    console.log(unique);
    unique.forEach((element) => {
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

// Genres
`https://api.themoviedb.org/3/discover/movie?api_key=a6358e507fbfbbc6c17a38f10a736e3f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${includeG}8&without_genres=${excludeG}`;

decorate(MovieStore, {
  movies: observable,
  randomMoviesList: observable,
});

const movieStore = new MovieStore();
movieStore.fetchTrendingMovies();

export default movieStore;
