import React from "react";
import ReactDOM from "react-dom";

function Title(props) {
  console.log(props);
  return (
    <div>
      <p>Are you strong</p>
      <p>{props.title}</p>
      <p>{props.hey}</p>
    </div>
  );
}

function Main() {
  return (
    <div>
      <p> Are you good </p>
      <Title title="are you beautiful" hey="stay at home" />
    </div>
  );
}

function App() {
  return (
    <div>
      Hello world!
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
