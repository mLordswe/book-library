import { ReactNode } from "react";
import { BookResult } from "../../services/types";
import "./bookCard.scss";

type BookCardProps = { book: BookResult; children?: ReactNode };

const BookCard = ({ book, children }: BookCardProps) => {
	return (
		<div className="book-card">
			<img
				src={`https://covers.openlibrary.org/b/id/${book.cover_i}-${book.Size}.jpg`}
				alt={`${book.title} cover`}
			/>
			<h3>{book.title}</h3>
			<p>{book.author_name?.join(",")}</p>
			<p>{book.first_publish_year}</p>
			<div className="action">{children}</div>
		</div>
	);
};

export default BookCard;
