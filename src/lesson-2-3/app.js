import React from "react";
import Accordion from "./components/Accordion/Accordion";

const accordion = [
	{
		id: 1,
		question: "What is your name1?",
		answer: "My name is Andrii",
	},
	{
		id: 2,
		question: "What is your name2?",
		answer: "My name is Mihai",
	},
	{
		id: 3,
		question: "What is your name3?",
		answer: "My name is Kate",
	},
];

export const App = () => {
	return <Accordion source={accordion} />;
};
