import React from "react";

import Styles from "./LikesCounter.module.scss";

export const LikesCounter = ({ counts }) => {
	return <span className={Styles.likesCounter}>{counts}</span>;
};

// lessson-2-1 done
