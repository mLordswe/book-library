import { useFavoritContext } from "services/hooks/useFavoritContext";
import FavoritList from "../../components/FavoritList/FavoritList";

const Library = () => {
	return (
		<>
			<section className="favorite-book-section">
				<h3>Your favorite books</h3>
				<FavoritList />
			</section>
			<h3>Your favorite authors</h3>
		</>
	);
};

export default Library;
