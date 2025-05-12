import React from "react";
import { BookResult } from "../../services/types";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Favoritcontext } from "../../services/FavoriteContext";

const bookCard = ({ title, author_name, first_publish_year, cover_i, Size }: BookResult) => {
	return (
		<div>
			<h3>{title}</h3>
			<p>{author_name}</p>
			<p>{first_publish_year}</p>
			<img src={`https://covers.openlibrary.org/b/id/${cover_i}-${Size}.jpg`} alt={`${title} cover`} />
			<FavoriteButton />
		</div>
	);
};

export default bookCard;
