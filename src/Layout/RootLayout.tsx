import React from "react";
import Header from "../components/Header/Header";
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
