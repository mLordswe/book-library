import { BookCard, FavoriteButton, LoadingIcon } from "components";
// Update the path below to the actual location of BookResult, for example:
import { BookResult } from "../../services/types";
import "./SearchResult.scss";

function SearchResult({ isLoading, data }: { isLoading: boolean; data: BookResult[] | undefined }) {
	return (
		<div className="search-result">
			{isLoading && <LoadingIcon />}

			{data &&
				data.map((item) => (
					<div key={item.key}>
						<BookCard book={item} children={<FavoriteButton book={item} />} />
					</div>
				))}
		</div>
	);
}
export default SearchResult;
