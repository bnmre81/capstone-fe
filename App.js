import React, { useEffect } from "react";

// Main Navigator
import MainStack from "./components/navigation";

// Socket Io BE connection
import io from "socket.io-client";

export default function App() {
  useEffect(() => {
    const socket = io("http://10.0.2.2:8000/");
  });
  return <MainStack />;
}
