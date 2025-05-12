import React from "react";
import { Link } from "react-router";
const NotFound = () => {
	return (
		<div>
			<h2>404 Not Found</h2>
			<Link to="/">Home</Link>
		</div>
	);
};
export default NotFound;
