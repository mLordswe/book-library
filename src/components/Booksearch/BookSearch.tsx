import { useState } from "react";

import "./BookSearch.scss";

import SearchResult from "components/SearchResult/SearchResult";
import useSearch from "../../services/hooks/useSearch";

export const BookSearch = () => {
	const [search, setSearch] = useState("");
	const { isLoading, data } = useSearch(search);
	return (
		<>
			<div className="Search-Container">
				<input
					className="Search-Input"
					type="search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search..."
				></input>

				<SearchResult isLoading={isLoading} data={data} />
			</div>
		</>
	);
};

export default BookSearch;
