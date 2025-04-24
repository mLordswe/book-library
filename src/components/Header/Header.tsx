import React from "react";
import { NavBar } from "../NavBar/NavBar";
import SearchField from "../SearchField/SearchField";

const Header = () => {
	return (
		<header>
			<h2>This is our header</h2>
			<NavBar />
			<SearchField />
		</header>
	);
};

export default Header;
