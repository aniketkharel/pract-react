import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/layouts/Navbar";
import About from "./components/application/About";
import Blogs from "./components/application/Blogs";
import Projects from "./components/application/Projects";

ReactDOM.render(
	<React.StrictMode>
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/about" component={About} />
					<Route exact path="/blogs" component={Blogs} />
					<Route exact path="/projects" component={Projects} />
					<Route />
				</Switch>
			</Router>
		</>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
