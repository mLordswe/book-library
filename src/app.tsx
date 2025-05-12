import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, Library, Profile, NotFound } from "./Pages";
export function App() {
	const router = createBrowserRouter([
		{ path: "/", element: <HomePage />, errorElement: <NotFound /> },
		{ path: "/library", element: <Library /> },
		{ path: "/profile", element: <Profile /> },
	]);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
