import { decorate, observable } from "mobx";

// Socket Io BE connection
import io from "socket.io-client";
class SocketStore {
  socket = null;
  nominatedMovies = [];
  users = [];

  connect = () => {
    this.socket = io("http://10.0.2.2:8000/");
  };

  hostRoom = ({ room, user }) => {
    this.socket.emit("join_room", { room, user });
  };
}

decorate(SocketStore, {
  socket: observable,
});

const socketStore = new SocketStore();

export default socketStore;
