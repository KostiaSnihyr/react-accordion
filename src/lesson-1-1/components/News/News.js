import React from "react";
import Styles from "./News.module.scss";

import { Article } from "../Article/Article";

export const News = () => {
	let newsArray = [1, 2, 3];
	let articles = newsArray.map((id) => {
		return <Article key={id} />;
	});
	return <section className={Styles.news}>{articles}</section>;
};
