import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useDebounce from "../../services/hooks";
import "./BookSearch.scss";

import { BookResult } from "../../services/types";

import { BookCard, LoadingIcon } from "components";

function SearchResult({ isLoading, data }: { isLoading: boolean; data: BookResult[] | undefined }) {
	return (
		<div className="Search-Result">
			{isLoading && <LoadingIcon />}

			{data &&
				data.map((item) => (
					<BookCard
						key={item.key}
						title={item.title}
						author_name={item.author_name}
						first_publish_year={`Published year:  ${item.first_publish_year}`}
						cover_i={item.cover_i}
						Size={"s".toLocaleUpperCase()} //caps sensitive should always be uppercase
					/>
					// <h3>{item.title}</h3>
					// <p>Author: {item.author_name}</p>
					// <p>published: {item.first_publish_year}</p>
					// <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}></img>
				))}
		</div>
	);
}

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
