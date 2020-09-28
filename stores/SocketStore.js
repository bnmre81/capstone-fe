import { decorate, observable } from "mobx";

// Socket Io BE connection
import io from "socket.io-client";
class SocketStore {
  socket = null;
  nominatedMovies = [];
  renderedNominated = [];
  users = null;
  room = null;
  result = null;
  start = false;
  done = 0;

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
      this.renderedNominated = [
        ...this.renderedNominated,
        {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
        },
      ];
    });

    // Start Process
    this.socket.on("start", ({ room }) => {
      this.start = true;
    });

    // recieve Votes
    this.socket.on("vote", ({ room, movieId }) => {
      this.nominatedMovies.forEach((nominated) => {
        if (nominated.id === movieId) {
          nominated.count++;
        }
      });
    });

    // Done Voting
    this.socket.on("done", ({ room }) => {
      this.done++;
    });

    // Users in room
    this.socket.on("getUsers", (clients) => {
      this.users = clients.length;
      console.log("clients.length", clients);
      console.log("clients.length", this.done);
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

  upVote = (movieId) => {
    const room = this.room;
    this.socket.emit("vote", { room, movieId });
    this.renderedNominated = this.renderedNominated.filter(
      (item) => item.id !== movieId
    );
  };

  downVote = (movieId) => {
    this.renderedNominated = this.renderedNominated.filter(
      (item) => item.id !== movieId
    );
  };

  getUsers = () => {
    const room = this.room;
    this.socket.emit("getUsers", { room });
  };

  DoneVoting = () => {
    const room = this.room;

    this.socket.emit("done", { room });
    this.getUsers(room);
  };

  highestVote = () => {
    this.nominatedMovies = this.nominatedMovies.sort((a, b) => {
      return b - a;
    });
    this.result = this.nominatedMovies[0];
  };
}

decorate(SocketStore, {
  socket: observable,
  room: observable,
  nominatedMovies: observable,
  result: observable,
  start: observable,
  renderedNominated: observable,
  users: observable,
  done: observable,
});

const socketStore = new SocketStore();

export default socketStore;
