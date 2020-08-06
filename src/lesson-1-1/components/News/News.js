import React from "react";
import Styles from "./News.module.scss";

import { Article } from "../Article/Article";

export const News = () => {
	return (
		<section className={Styles.news}>
			<Article></Article>
			<Article></Article>
			<Article></Article>
		</section>
	);
};
