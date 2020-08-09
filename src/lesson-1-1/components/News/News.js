import React from "react";
import Styles from "./News.module.scss";

import { Article } from "../Article/Article";

export const News = () => {
	const acticles = [
		{ id: 1, commentsCounter: 10, likesCounter: 315 },
		{ id: 2, commentsCounter: 10, likesCounter: 315 },
		{ id: 3, commentsCounter: 10, likesCounter: 315 },
	];

	const newsJSX = acticles.map((article) => {
		return <Article key={article.id} article={article} />;
	});
	return <section className={Styles.news}>{newsJSX}</section>;
};
