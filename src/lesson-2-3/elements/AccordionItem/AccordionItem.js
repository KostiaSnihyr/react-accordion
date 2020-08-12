import React from "react";
import Style from "../../components/Accordion/Accordion.module.scss";

const AccordionItem = ({ item, handleSelectById }) => {
	return (
		<div
			onClick={() => handleSelectById(item.id)}
			className={`${Style["accordion-item"]} ${
				item.isShown ? Style["selected"] : ""
			}`}
		>
			<div className={Style["accordion-question"]}>
				<span>{item.question}</span>
			</div>
			<p className={Style["accordion-answer"]}>{item.answer}</p>
		</div>
	);
};

export default AccordionItem;
