import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const App = () => <div>Blurb to go here</div>;

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
