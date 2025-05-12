import React from "react";

import { Link } from "react-router";
const NavBar = () => {
	return (
		<nav className="NavBar">
			<Link to={"/"}>
				<span>HomePage</span>
			</Link>
			<Link to={"/library"}>
				<span>Library</span>
			</Link>
			<Link to={"/profile"}>
				<span>Profile</span>
			</Link>
		</nav>
	);
};
export default NavBar;
