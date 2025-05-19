"use client";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { FavoritProvider } from "./services/context/FavoriteContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<FavoritProvider>
					<RouterProvider router={router} />
				</FavoritProvider>
			</QueryClientProvider>
		</>
	);
}
