"use client";
import { ReactNode, useEffect, useState } from "react";
import { BookResult } from "../../services/types";
import "./bookCard.scss";
import Modal from "../../components/Modal/Modal";
type BookCardProps = { book: BookResult; children?: ReactNode };

const BookCard = ({ book, children }: BookCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [isOpen]);
	const handleClick = () => {
		setIsOpen(true);
	};
	return (
		<>
			<div className="book-card" onClick={handleClick}>
				<img
					src={`https://covers.openlibrary.org/b/id/${book.cover_i}-${book.Size}.jpg`}
					alt={`${book.title} cover`}
				/>
				<h3>{book.title}</h3>
				<p>{book.author_name?.join(",")}</p>
				<p>{book.first_publish_year}</p>
				<div className="action">{children}</div>
				{isOpen && <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>}
			</div>
		</>
	);
};

export default BookCard;
