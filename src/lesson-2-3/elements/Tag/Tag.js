import React from "react";
import Styles from "./Tag.module.scss";

export const Tags = ({ source }) => {
	const tagsArray = source;

	const tag = tagsArray.map((tag, index) => {
		return (
			<div key={index}>
				<span className={Styles.tag}>{tag}</span>
			</div>
		);
	});
	return <>{tag}</>;
};
