import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./Pages/HomePage/HomePage";
import Library from "./Pages/LibraryPage/Library";
import { Profile } from "./Pages/ProfilePage/Profile";
import { NotFound } from "./Pages/NotFoundPage/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Booksearch from "./components/Booksearch/BookSearch";
export function App() {
	const queryClient = new QueryClient();

	const router = createBrowserRouter([
		{ path: "/", element: <HomePage />, errorElement: <NotFound /> },
		{ path: "/library", element: <Library /> },
		{ path: "/profile", element: <Profile /> },
	]);
	return (
		<QueryClientProvider client={queryClient}>
			<Booksearch />
		</QueryClientProvider>
	);
}
