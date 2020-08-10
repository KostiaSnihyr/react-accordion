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

			{/* <div className={`${Styles["accordion-item"]} ${Styles["selected"]}`}>
				<div className={Styles["accordion-question"]}>
					<span>{source[0].question}</span>
				</div>
				<p className={Styles["accordion-answer"]}>{source[0].answer}</p>
			</div>

			<div className={Styles["accordion-item"]}>
				<div className={Styles["accordion-question"]}>
					<span>{source[1].question}</span>
				</div>
				<p className={Styles["accordion-answer"]}>{source[1].answer}</p>
			</div>

			<div className={Styles["accordion-item"]}>
				<div className={Styles["accordion-question"]}>
					<span>{source[2].question}</span>
				</div>
				<p className={Styles["accordion-answer"]}>{source[2].answer}</p>
			</div> */}
		</section>
	);

	// const newsDataArr = [
	// 	{
	// 		title: "American writer of",
	// 		description: "Lorem ipsum",
	// 		published: "2019-10-15T15:32:45.167Z",
	// 		likes: 315,
	// 		comments: 10,
	// 		image:
	// 			"https://images.pexels.com/photos/2967810/pexels-photo-2967810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	// 		tags: ["literature", "books"],
	// 	},
	// 	{
	// 		title: "Another article",
	// 		description: "Lorem ipsum",
	// 		published: "2019-10-15T15:32:45.167Z",
	// 		likes: 201,
	// 		comments: 12,
	// 		image:
	// 			"https://images.pexels.com/photos/2967810/pexels-photo-2967810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	// 		tags: ["music", "sport"],
	// 	},
	// 	{
	// 		title: "Popular article",
	// 		description: "Lorem ipsum",
	// 		published: "2019-10-15T15:32:45.167Z",
	// 		likes: 456,
	// 		comments: 42,
	// 		image:
	// 			"https://images.pexels.com/photos/2967810/pexels-photo-2967810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	// 		tags: ["article", "art"],
	// 	},
	// ];
	// return (
	// 	<>
	// 		<News source={newsDataArr} />
	// 	</>
	// );
};
