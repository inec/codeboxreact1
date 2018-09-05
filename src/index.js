import React from "react";
import ReactDOM from "react-dom";
import { SkiDayCount } from "./components/SkiDayCount";

import "./stylesheets/ui.scss";
import "./stylesheets/globals.scss";
import "./stylesheets/index.scss";

function App() {
  return (
    <div className="App">
      <SkiDayCount />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
