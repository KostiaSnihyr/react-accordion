import React from "react";
import Styles from "./Article.module.scss";

import { Tags } from "../../elements/Tag/Tag";
import { CommentsCounter } from "../../elements/CommentsCounter/CommentsCounter";
import { LikesCounter } from "../../elements/LikesCounter/LikesCounter";

export const Article = ({
	image,
	title,
	description,
	published,
	tags,
	comments,
	likes,
}) => {
	return (
		<section className={Styles.article}>
			<header>
				<div className={Styles.poster}>
					<img src={image} alt="" />
				</div>
				<div className={Styles.tags}>
					<Tags source={tags}></Tags>
				</div>
			</header>
			<article>
				<h1>{title}</h1>
				<p>{description}</p>
			</article>
			<footer>
				<span>{published}</span>
				<div className={Styles.controls}>
					<CommentsCounter counts={comments}></CommentsCounter>
					<LikesCounter counts={likes}></LikesCounter>
				</div>
			</footer>
		</section>
	);
};
