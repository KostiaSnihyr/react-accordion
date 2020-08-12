import React, { useState } from "react";
import AccordionItem from "../../elements/AccordionItem/AccordionItem";
import Styles from "./Accordion.module.scss";

const Accordion = ({ source }) => {
	const [data, setData] = useState(source);

	const handleSelectById = (targetId) => {
		const preparedData = data.map((item) => {
			if (item.id === targetId) {
				return {
					...item,
					isShown: true,
				};
			}

			return {
				...item,
				isShown: false,
			};
		});

		setData(preparedData);
	};

	const accordionItems = data.map((item) => {
		const preparedProps = {
			handleSelectById,
			item,
			key: item.id,
		};

		return <AccordionItem {...preparedProps} />;
	});

	return (
		<section className={Styles.accordion}>
			<h1>Accordion</h1>
			{accordionItems}
		</section>
	);
};

export default Accordion;
