import ModalBookDetails from "components/Modal/parts/ModalMain/ModalBookDetails";
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
				children: [
					{
						path: "book/works/:key",
						element: <ModalBookDetails />,
					},
				],
			},

			{
				path: "/library",
				element: <Library />,
				children: [
					{
						path: "book/work/:key",
						element: <ModalBookDetails />,
					},
				],
			},

			{ path: "/profile", element: <Profile /> },
		],
	},
]);
