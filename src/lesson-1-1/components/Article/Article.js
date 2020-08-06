import React from "react";
import Styles from "./Article.module.scss";

import { Tags } from "../../elements/Tag/Tag";
import { CommentsCounter } from "../../elements/CommentsCounter/CommentsCounter";
import { LikesCounter } from "../../elements/LikesCounter/LikesCounter";

export const Article = () => {
	return (
		<section className={Styles.article}>
			<header>
				<div className={Styles.poster}>
					<img
						src="https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png"
						alt=""
					/>
				</div>
				<div className={Styles.tags}>
					<Tags></Tags>
				</div>
			</header>
			<article>
				<h1>American writer of bad cowboy stories arrived in</h1>
				<p>
					Volunteering to help people in need combined with travelling to
					faraway places is a new{" "}
				</p>
			</article>
			<footer>
				<span>15.07.2017</span>
				<div className={Styles.controls}>
					<CommentsCounter></CommentsCounter>
					<LikesCounter></LikesCounter>
				</div>
			</footer>
		</section>
	);
};
