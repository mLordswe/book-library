import { RootLayout } from "./Layout";
import { NotFound, HomePage, Library, Profile } from "./Pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <NotFound />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},

			{
				path: "/library",
				element: <Library />,
			},

			{ path: "/profile", element: <Profile /> },
		],
	},
]);
