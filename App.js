import React from "react";
import MainStack from "./components/navigation";

export default function App() {
  // no need for Fragments here since you're returning a single component
  return (
    <>
      <MainStack />
    </>
  );
}
