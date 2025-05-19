"use client";
import { useState, useEffect } from "react";
import "./BookSearch.scss";

type Props = {
	search: string;
	setSearch: (value: string) => void;
};

const BookSearchInput = ({ search, setSearch }: Props) => {
	const [isFocus, setIsFocus] = useState(false);

	useEffect(() => {
		if (!isFocus) {
			console.log("Currently not focused", new Date().toLocaleTimeString());
		}
	}, [isFocus]);

	return (
		<div className="Search-Container">
			<input
				className="Search-Input"
				type="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setTimeout(() => setIsFocus(false), 150)}
				placeholder="Search..."
			/>
		</div>
	);
};
export default BookSearchInput;
