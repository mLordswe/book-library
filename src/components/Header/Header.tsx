import React from "react";
import { NavBar } from "../NavBar/NavBar";

import BookSearch from "../Booksearch/BookSearch";

const Header = () => {
	return (
		<header>
			<h2>This is our header</h2>
			<NavBar />
			<BookSearch />
		</header>
	);
};

export default Header;
