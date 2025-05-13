import { RootLayout } from "./Layout";
import { NotFound, HomePage, Library, Profile } from "./Pages";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "/library", element: <Library /> },
			{ path: "/profile", element: <Profile /> },
		],
	},
]);
