import { useContext } from "react";
import { FavoritContext } from "../context/FavoriteContext";
export const useFavoritContext = () => {
	const context = useContext(FavoritContext);
	if (!context) throw new Error("useFavoritContext måste användas inom FavoritProvider");
	return context;
};