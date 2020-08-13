import React from "react";
import { News } from "./components/News/News.js";

export const App = () => {
	const newsDataArr = [
		{
			title: "American writer of",
			description: "Lorem ipsum",
			published: "2019-10-15T15:32:45.167Z",
			likes: 315,
			comments: 10,
			image:
				"https://images.pexels.com/photos/2967810/pexels-photo-2967810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
			tags: ["literature", "books"],
		},
		{
			title: "Another article",
			description: "Lorem ipsum",
			published: "2019-10-15T15:32:45.167Z",
			likes: 201,
			comments: 12,
			image:
				"https://images.pexels.com/photos/2967810/pexels-photo-2967810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
			tags: ["music", "sport"],
		},
		{
			title: "Popular article",
			description: "Lorem ipsum",
			published: "2019-10-15T15:32:45.167Z",
			likes: 456,
			comments: 42,
			image:
				"https://images.pexels.com/photos/2967810/pexels-photo-2967810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
			tags: ["article", "art"],
		},
	];

	return (
		<>
			<News source={newsDataArr} />
		</>
	);
};

//some comment to push again
