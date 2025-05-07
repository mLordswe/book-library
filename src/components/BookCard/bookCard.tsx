import React from "react";
import { BookResult } from "../../services/types";

const bookCard = ({ title, author_name, first_publish_year, cover_i, Size }: BookResult) => {
	return (
		<div>
			<h3>{title}</h3>
			<p>{author_name}</p>
			<p>{first_publish_year}</p>
			<img src={`https://covers.openlibrary.org/b/id/${cover_i}-${Size}.jpg`} alt={`${title} cover`} />
		</div>
	);
};

export default bookCard;
