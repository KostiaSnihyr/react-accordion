import React from "react";
import Styles from "./CommentsCounter.module.scss";

export const CommentsCounter = ({ counts }) => {
	return <span className={Styles.commentsCounter}>{counts}</span>;
};
