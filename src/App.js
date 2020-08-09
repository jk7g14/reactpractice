import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Peppor",
  //     animal: "Bird",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  // ]);
  return (
    <div>
      <h1 id="somthing-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
