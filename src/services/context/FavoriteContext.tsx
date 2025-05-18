import { LoadingIcon } from "components/index";
import { createContext, ReactNode, useEffect, useState } from "react";
import { NormalizedBook } from "services/types";
interface FavoritContextType {
	favorites: NormalizedBook[];
	addFavorite: (book: NormalizedBook) => void;
	removeFavorite: (book: string) => void;
}

export const FavoritContext = createContext<FavoritContextType | null>(null);

export const FavoritProvider = ({ children }: { children: ReactNode }) => {
	const [favorites, setFavorites] = useState<NormalizedBook[]>([]);

	const [isInitialized, setIsInitialized] = useState(false);
	useEffect(() => {
		const stored = localStorage.getItem("favorites");
		if (stored) {
			setFavorites(JSON.parse(stored));
		}
		setIsInitialized(true);
	}, []);

	useEffect(() => {
		if (isInitialized) {
			localStorage.setItem("favorites", JSON.stringify(favorites));
		}
	}, [isInitialized]);
	if (!isInitialized) return <LoadingIcon />;
	const addFavorite = (book: NormalizedBook) => {
		if (!favorites.some((fav) => fav.key === book.key)) {
			setFavorites([...favorites, book]);
		}
	};
	const removeFavorite = (key: string) => {
		setFavorites(favorites.filter((book) => book.key !== key));
	};
	return (
		<FavoritContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
			{children}
		</FavoritContext.Provider>
	);
};
