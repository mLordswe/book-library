import { useFavoritContext } from "../../services/hooks/useFavoritContext";
import FavoritList from "../../components/FavoritList/FavoritList";
import { Outlet, useLocation, useNavigate } from "react-router";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const Library = () => {
	// const location = useLocation();
	// const isModal = location.state?.modal;

	// const navigate = useNavigate();
	// const handleClose = () => {
	// 	navigate("/library");
	// };
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<section className="favorite-book-section">
				<h3>Your favorite books</h3>
				<FavoritList />
			</section>
			<h3>Your favorite authors</h3>
			<Outlet />
			{
				<Modal
					open={isOpen}
					onClose={() => {
						setIsOpen(false);
					}}
				/>
			}
		</>
	);
};

export default Library;
