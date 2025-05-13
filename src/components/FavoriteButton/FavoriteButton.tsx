import React, { useContext } from "react";
import "./FavoriteButton.scss";

import { BookResult } from "services/types";
import { useFavoritContext } from "../../services/hooks/useFavoritContext";

const FavoriteButton = ({ book }: { book: BookResult }) => {
	const { addFavorite, favorites, removeFavorite } = useFavoritContext();
	const isFavorite = favorites.some((fav) => fav.key === book.key);
	const handleClick = () => {
		if (isFavorite) {
			removeFavorite(book.key);
		} else {
			addFavorite(book);
		}
	};

	return (
		<button className="Favorite-Button" onClick={handleClick}>
			{isFavorite ? "❌ Ta bort" : "❤️ Lägg till"}
		</button>
	);
};

export default FavoriteButton;
