import React from "react";
import Styles from "./News.module.scss";

import { Article } from "../Article/Article";

export const News = (props) => {
	const articles = [{ id: 1 }, { id: 2 }, { id: 3 }];

	const newsJSX = articles.map((article) => {
		const indexOfArticle = articles.indexOf(article);
		// console.log(indexOfArticle);
		// console.log(props.source[indexOfArticle].title);
		return (
			<Article
				key={article.id}
				article={article}
				{...props.source[indexOfArticle]}
			/>
		);
	});
	return <section className={Styles.news}>{newsJSX}</section>;
};
