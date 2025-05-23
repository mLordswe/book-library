import { useEffect } from "react";
import useBookDetails from "../../../../services/hooks/useBookDetails";
import { NormalizedBook } from "services/types";
import LoadingIcon from "components/LoadingIcon/LoadingIcon";

type ModalBookDetailsProps = {
	bookkey: string;
	onEditionLoaded: (book: NormalizedBook) => void;
};

const ModalBookDetails = ({ bookkey, onEditionLoaded }: ModalBookDetailsProps) => {
	const book = useBookDetails(bookkey);

	useEffect(() => {
		if (book) {
			onEditionLoaded(book);
		}
	}, [book, onEditionLoaded]);

	if (!book) {
		return <LoadingIcon />;
	}

	return (
		<div className="book-details">
			<h3>{book.title}</h3>
			<p>
				{typeof book.description === "string"
					? book.description
					: book.description?.value ?? "No description available"}
			</p>
			{book.publishers && book.publishers.length > 0 && <p>Publisher: {book.publishers.join(", ")}</p>}
			<p>
				{typeof book.first_sentence === "string"
					? book.first_sentence
					: book.first_sentence?.value ?? "Couldnt find first sentence"}
			</p>
		</div>
	);
};

export default ModalBookDetails;
