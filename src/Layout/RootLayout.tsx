import { Header } from "components";
import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<footer>
				<p>Footer</p>
			</footer>
		</>
	);
};

export default RootLayout;
