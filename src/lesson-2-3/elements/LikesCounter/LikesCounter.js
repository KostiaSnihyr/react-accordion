import React, { useState } from "react";

import Styles from "./LikesCounter.module.scss";

export const LikesCounter = ({ counts }) => {
	const [state, setState] = useState(counts);

	const _toggleLike = () => {
		state === counts ? setState(state + 1) : setState(state - 1);
	};

	return (
		<span onClick={_toggleLike} className={Styles.likesCounter}>
			{state}
		</span>
	);
};
