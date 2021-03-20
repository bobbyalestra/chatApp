import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
const App = () => <div>Hi there, I'm React from Webpack 5.</div>;

ReactDOM.render(<App />, document.getElementById("app"));
