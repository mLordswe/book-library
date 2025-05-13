import { BookCard, LoadingIcon } from "components";
// Update the path below to the actual location of BookResult, for example:
import { BookResult } from "../../services/types";
import "./SearchResult.scss";
function SearchResult({ isLoading, data }: { isLoading: boolean; data: BookResult[] | undefined }) {
	return (
		<div className="search-result">
			{isLoading && <LoadingIcon />}

			{data &&
				data.map((item) => (
					<BookCard
						key={item.key}
						title={item.title}
						author_name={item.author_name}
						first_publish_year={`Published year:  ${item.first_publish_year}`}
						cover_i={item.cover_i}
						Size={"m".toLocaleUpperCase()} //caps sensitive should always be uppercase
					/>
				))}
		</div>
	);
}
export default SearchResult;
