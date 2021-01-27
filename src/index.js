import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
