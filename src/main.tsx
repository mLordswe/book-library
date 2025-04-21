import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

import { createBrowserRouter } from "react-router";
import Library from "./routes/Library.tsx";
import { Profile } from "./routes/Profile.tsx";
import { RouterProvider } from "react-router";
import HomePage from "./routes/HomePage.tsx";
import { NotFound } from "./routes/NotFound.tsx";

const router = createBrowserRouter([
	{ path: "/", element: <HomePage />, errorElement: <NotFound /> },
	{ path: "/library", element: <Library /> },
	{ path: "/profile", element: <Profile /> },
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
