import React from "react";

function Food({ favourite }) {
  return <h1> I like {favourite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hellooo~</h1>
      <Food favourite="kimchi" />
      <Food favourite="ramen" />
      <Food favourite="pork" />
      <Food favourite="meat" />
    </div>
  );
}

export default App;
