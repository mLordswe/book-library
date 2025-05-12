import { Header } from "components";
import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
