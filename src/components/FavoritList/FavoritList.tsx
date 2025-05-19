import { useFavoritContext } from "../../services/hooks/useFavoritContext";
import BookCard from "../BookCard/bookCard";
import FavoriteButton from "components/FavoriteButton/FavoriteButton";
import "./FavoritList.scss";

const FavoritList = () => {
	const { favorites } = useFavoritContext();
	return (
		<div className="favorite-list-container">
			{favorites.map((book) => (
				<div key={book.key}>
					<BookCard
						book={{ ...book, Size: "l".toUpperCase(), cover_i: book.cover_i }}
						children={<FavoriteButton book={book} />}
					/>
				</div>
			))}
		</div>
	);
};

export default FavoritList;
