"use client";
import { ReactNode, useEffect, useState } from "react";
import { NormalizedBook } from "../../services/types";
import "./bookCard.scss";
import Modal from "../../components/Modal/Modal";
import ModalBookDetails from "components/Modal/parts/ModalMain/ModalBookDetails";
import ModalTextArea from "components/Modal/parts/ModalMain/ModalTextArea";
import { ModalNumberOfPagesRead } from "../Modal/parts/ModalMain/ModalNumberOfPagesRead";

type BookCardProps = { book: NormalizedBook; children?: ReactNode };

const BookCard = ({ book, children }: BookCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [pagesRead, setPagesRead] = useState<number>(0);

	const bookkey = book.key.replace("/works", "");

	const totalPages = book.number_of_pages ?? 0;
	useEffect(() => {
		const saved = localStorage.getItem(`pagesRead-${bookkey}`);
		if (saved) {
			setPagesRead(Number(saved));
		}
	}, [bookkey]);

	useEffect(() => {
		localStorage.setItem(`pagesRead-${bookkey}`, String(pagesRead));
	});

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
			</div>
			{isOpen && (
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					<ModalBookDetails bookkey={bookkey} />
					<ModalTextArea />
					<ModalNumberOfPagesRead
						maxPage={totalPages}
						pagesRead={pagesRead}
						onPagesReadChange={setPagesRead}
					/>
				</Modal>
			)}
		</>
	);
};

export default BookCard;
//{isOpen && <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>}
