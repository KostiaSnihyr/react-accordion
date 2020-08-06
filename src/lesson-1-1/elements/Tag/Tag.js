import React from "react";
import Styles from "./Tag.module.scss";

const tagsArray = ["Literature", "Books"];

export const Tags = () => {
	const tag = tagsArray.map((tag, index) => {
		return (
			<div key={index}>
				<span className={Styles.tag}>{tag}</span>
			</div>
		);
	});
	return <>{tag}</>;
};
