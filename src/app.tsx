import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./Pages/HomePage/HomePage";
import Library from "./Pages/LibraryPage/Library";
import { Profile } from "./Pages/ProfilePage/Profile";
import { NotFound } from "./Pages/NotFoundPage/NotFound";

export function App() {
	<script src="http://localhost:8097"></script>;
	const router = createBrowserRouter([
		{ path: "/", element: <HomePage />, errorElement: <NotFound /> },
		{ path: "/library", element: <Library /> },
		{ path: "/profile", element: <Profile /> },
	]);
	return <HomePage />;
}
