"use client";
import { useEffect, useState } from "react";
import "./BookSearch.scss";

import SearchResult from "components/SearchResult/SearchResult";
import useSearch from "../../services/hooks/useSearch";

export const BookSearch = () => {
	const [search, setSearch] = useState("");
	const [isFocus, setIsFocus] = useState(false);
	const { isLoading, data } = useSearch(search);
	const currtime = new Date().toLocaleTimeString(); // remove this later
	useEffect(() => {
		if (isFocus) {
		} else {
			console.log("Currently not focused", currtime);
		}
	}, [isFocus]);
	return (
		<>
			<div className="Search-Container">
				<input
					className="Search-Input"
					type="search"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setTimeout(() => setIsFocus(false), 150)}
					placeholder="Search..."
				></input>

				{data && <SearchResult isLoading={isLoading} data={data} />}
			</div>
		</>
	);
};

export default BookSearch;
