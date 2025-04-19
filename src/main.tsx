import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import Library from "./routes/Library.tsx";
import { Profile } from "./routes/Profile.tsx";

const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/library", element: <Library /> },
	{ path: "/profile", element: <Profile /> },
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
