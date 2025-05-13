import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useDebounce from "../../services/hooks";
import "./BookSearch.scss";

import { BookResult } from "../../services/types";

import SearchResult from "components/SearchResult/SearchResult";

export const BookSearch = () => {
	const [search, setSearch] = useState("");
	const debouncedSearchTerm = useDebounce(search, 200);
	const { isLoading, error, data } = useQuery({
		queryKey: ["search", debouncedSearchTerm],
		queryFn: async (): Promise<BookResult[]> =>
			await fetch(`https://openlibrary.org/search.json?q=${debouncedSearchTerm}`)
				.then((res) => res.json())
				.then((data) => data.docs || [])
				.catch((error) => {
					console.error("Error", error);
					return [];
				}),
	});
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
