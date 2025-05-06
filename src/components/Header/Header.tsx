import React from "react";
import { NavBar } from "../NavBar/NavBar";
import "./Header.scss";
import BookSearch from "../Booksearch/BookSearch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Header = () => {
	const queryClient = new QueryClient();
	return (
		<header>
			<QueryClientProvider client={queryClient}>
				<h2>This is our header</h2>
				<NavBar />

				<BookSearch />
			</QueryClientProvider>
		</header>
	);
};

export default Header;
