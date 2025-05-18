import "./FavoriteButton.scss";

import { NormalizedBook } from "services/types";
import { useFavoritContext } from "../../services/hooks/useFavoritContext";
import React from "react";

const FavoriteButton = ({ book }: { book: NormalizedBook | undefined }) => {
	if (!book) return;

	const { addFavorite, favorites, removeFavorite } = useFavoritContext();
	const isFavorite = favorites.some((fav) => fav.key === book.key);
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
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
