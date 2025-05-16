import React from "react";
import { BookSearch, Header } from "components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function HomePage() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<BookSearch />
				<main>
					<p>Detta är HomePage. WIP </p>
				</main>
			</QueryClientProvider>
		</>
	);
}

export default HomePage;
