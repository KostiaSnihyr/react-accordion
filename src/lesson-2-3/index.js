import React from "react";
import ReactDOM from "react-dom";

import { Accordion } from "./app";
import * as serviceWorker from "../serviceWorker";
ReactDOM.render(
	<Accordion
		source={[
			{
				question: "What is your name?",
				answer: "My name is Andrii",
				isPressed: false,
			},
			{
				question: "What is your name?",
				answer: "My name is Andrew",
				isPressed: false,
			},
			{
				question: "What is your name?",
				answer: "My name is Jane",
				isPressed: false,
			},
		]}
	/>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
