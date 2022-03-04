import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./css/estilos.css";

import App from "./App";

const contenedor = document.querySelector("#root");

ReactDOM.render(<App />, contenedor);
