"use client";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { FavoritProvider } from "./services/context/FavoriteContext";
export function App() {
	return (
		<>
			<FavoritProvider>
				<RouterProvider router={router} />
			</FavoritProvider>
		</>
	);
}
