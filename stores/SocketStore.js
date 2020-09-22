import { decorate, observable } from "mobx";

// Socket Io BE connection
import io from "socket.io-client";
class SocketStore {
  socket = null;
  nominatedMovies = [];
  room = null;

  connect = () => {
    //BE testing IP
    // this.socket = io("http://10.0.2.2:8000/");

    //heroku BE
    this.socket = io("https://peaceful-shelf-49575.herokuapp.com/");
    this.socket.on("message", ({ room, movie }) => {
      this.nominatedMovies = [...this.nominatedMovies, movie];
    });
  };

  hostRoom = ({ room, user }) => {
    this.socket.emit("join_room", { room, user });
    this.room = room;
  };

  nominate = (movie) => {
    const room = this.room;
    this.socket.emit("message", { room, movie });
  };
}

decorate(SocketStore, {
  socket: observable,
  room: observable,
  nominatedMovies: observable,
});

const socketStore = new SocketStore();

export default socketStore;
