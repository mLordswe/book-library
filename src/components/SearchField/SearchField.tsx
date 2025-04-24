import React, { useEffect, useState } from "react";
import { SearchButton } from "../SearchButton/SearchButton";

const SearchField = () => {
	const [searchData, setSearchData] = useState("");
	const handleClick = () => {
		console.log(searchData);
	};
	return (
		<div>
			<label htmlFor="SearchField">Search</label>
			<input type="text" className="SearchField" onChange={(e) => setSearchData(e.target.value)} />
			<SearchButton innerText="Search" onClick={handleClick} />
		</div>
	);
};

export default SearchField;
