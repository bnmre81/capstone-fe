import { decorate, observable } from "mobx";

// Socket Io BE connection
import io from "socket.io-client";
class SocketStore {
  socket = null;
  nominatedMovies = [];
  room = null;

  connect = () => {
    this.socket = io("http://10.0.2.2:8000/");
    this.socket.on("message", ({ room, movie }) => {
      this.nominatedMovies = [...this.nominatedMovies, movie];
    });
  };

  hostRoom = ({ room, user }) => {
    this.socket.emit("join_room", { room, user });
    this.room = room;
  };

  nominate = ({ movie }) => {
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
