import { Link } from "react-router";
import "./NavBar.scss";
const NavBar = () => {
	return (
		<nav className="navbar">
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
