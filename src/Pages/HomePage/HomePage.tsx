import React from "react";
import { BookSearch, Header } from "components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<Header />
			<QueryClientProvider client={queryClient}>
				<BookSearch />
			</QueryClientProvider>
			<p>Detta är HomePage</p>
		</>
	);
}

export default App;
