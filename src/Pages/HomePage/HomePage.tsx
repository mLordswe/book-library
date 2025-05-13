import React from "react";
import { BookSearch, Header } from "components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<p>Detta är HomePage</p>
				<BookSearch />
			</QueryClientProvider>
		</>
	);
}

export default App;
