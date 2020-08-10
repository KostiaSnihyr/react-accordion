import React, { useState } from "react";
// import { News } from "./components/News/News.js";
import Styles from "./app.module.scss";

export const Accordion = ({ source }) => {
	const [objSource, setSource] = useState(source);
	const toggleHandler = (index) => {
		setSource(
			source.map((el) => {
				el.isPressed = false;
			})
		);
		source[index].isPressed = !source[index].isPressed;
	};

	let divJSX = source.map((obj, index) => {
		return (
			<div
				key={index}
				className={
					obj.isPressed
						? `${Styles["accordion-item"]} ${Styles["selected"]}`
						: `${Styles["accordion-item"]}`
				}
				onClick={() => toggleHandler(index)}
			>
				<div className={Styles["accordion-question"]}>
					<span>{obj.question}</span>
				</div>
				<p className={Styles["accordion-answer"]}>{obj.answer}</p>
			</div>
		);
	});

	return (
		<section className={Styles.accordion}>
			<h1>Accordion</h1>
			{divJSX}
		</section>
	);
};
