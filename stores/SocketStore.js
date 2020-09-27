import { decorate, observable } from "mobx";

// Socket Io BE connection
import io from "socket.io-client";
class SocketStore {
  socket = null;
  nominatedMovies = [];
  room = null;
  result = null;
  start = false;

  connect = () => {
    //BE testing IP
    // this.socket = io("http://10.0.2.2:8000/");

    //heroku BE
    this.socket = io("https://peaceful-shelf-49575.herokuapp.com/");
    this.socket.on("nominate", ({ room, movie }) => {
      this.nominatedMovies = [
        ...this.nominatedMovies,
        {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          count: 0,
        },
      ];
    });

    // recieve Votes
    this.socket.on("vote", ({ room, movieId }) => {
      this.nominatedMovies.forEach((nominated) => {
        if (nominated.id === movieId) {
          nominated.count++;
        }
      });
    });

    // Start Process
    this.socket.on("start", ({ room }) => {
      this.start = true;
    });
  };

  hostRoom = ({ room, user }) => {
    this.socket.emit("join_room", { room, user });
    this.room = room;
  };

  startNomination = () => {
    const room = this.room;
    this.socket.emit("start", { room });
  };

  nominate = (movie) => {
    const room = this.room;
    this.socket.emit("nominate", { room, movie });
  };
  vote = (movieId) => {
    const room = this.room;
    this.socket.emit("vote", { room, movieId });
  };

  highestVote = () => {
    this.result = Math.max.apply(
      Math,
      this.nominatedMovies.map((value) => {
        return value.cout;
      })
    );
  };
}

decorate(SocketStore, {
  socket: observable,
  room: observable,
  nominatedMovies: observable,
  result: observable,
  start: observable,
});

const socketStore = new SocketStore();

export default socketStore;
