import { Header } from "components";
import { Footer } from "components/Footer/Footer";
import { Outlet } from "react-router";
import "./RootLayout.scss";
const RootLayout = () => {
	return (
		<>
			<Header />
			<main className="Main">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;
