import { BookCard, FavoriteButton, LoadingIcon } from "components";

import { BookResult } from "../../services/types";
import "./SearchResult.scss";

function SearchResult({ isLoading, data }: { isLoading: boolean; data: BookResult[] | undefined }) {
	return (
		<div className="search-result">
			{isLoading && <LoadingIcon />}

			{data &&
				data.map((item) => (
					<div key={item.key}>
						<BookCard
							book={{ ...item, Size: "l".toUpperCase(), cover_i: item.cover_i }}
							children={<FavoriteButton book={item} />}
						/>
					</div>
				))}
		</div>
	);
}
export default SearchResult;
