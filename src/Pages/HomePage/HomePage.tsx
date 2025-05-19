import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchResult from "components/SearchResult/SearchResult";
import useSearch from "../../services/hooks/useSearch";
import BookSearchInput from "components/Booksearch/BookSearch";
import { Outlet } from "react-router-dom";

function HomePage() {
	const [search, setSearch] = useState("");
	const { isLoading, data } = useSearch(search);

	return (
		<>
			<BookSearchInput search={search} setSearch={setSearch} />
			<main>
				<Outlet />
				<SearchResult isLoading={isLoading} data={data} />
			</main>
		</>
	);
}

export default HomePage;
