import { BookResult } from "../../services/types";
import "./bookCard.scss";
import { FavoriteButton } from "components";

const bookCard = ({ title, author_name, first_publish_year, cover_i, Size }: BookResult) => {
	return (
		<div className="book-card">
			<img src={`https://covers.openlibrary.org/b/id/${cover_i}-${Size}.jpg`} alt={`${title} cover`} />
			<h3>{title}</h3>
			<p>{author_name}</p>
			<p>{first_publish_year}</p>
			<FavoriteButton />
		</div>
	);
};

export default bookCard;
