import { decorate, observable } from "mobx";

class MovieStore {
  movies = [];

  latestList = async () => {
    await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=a6358e507fbfbbc6c17a38f10a736e3f
          `
    )
      .then((data) => data.json())
      .then((data) => {
        this.movies = data.results;
        console.log("MovieStore -> latestList -> movies", movies);
      });
  };
}

// This is gona be used to Search for movies
/// `https://api.themoviedb.org/3/search/movie?api_key=a6358e507fbfbbc6c17a38f10a736e3f&language=en-US&query=${query}&page=1&include_adult=false`

decorate(MovieStore, {
  movies: observable,
});

const movieStore = new MovieStore();
movieStore.latestList();

export default movieStore;
