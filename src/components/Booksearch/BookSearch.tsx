import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useDebounce from "../../services/hooks";
import "./BookSearch.scss";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";
type BookResult = {
	key: string;
	title: string;
	author_name?: string[];
	cover_i?: number;
	first_publish_year?: number;
};

function SearchResult({ isLoading, data }: { isLoading: boolean; data: BookResult[] | undefined }) {
	return (
		<div className="Search-Result">
			{isLoading && <LoadingIcon />}

			{data &&
				data.map((item) => (
					<div key={item.key}>
						<h3>{item.title}</h3>
						<p>Author: {item.author_name}</p>
						<p>published: {item.first_publish_year}</p>
						<img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}></img>
					</div>
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
			<div className="Book-Search">
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
