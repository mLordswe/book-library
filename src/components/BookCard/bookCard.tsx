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
	const [totalPages, setTotalPages] = useState<number>(0);
	const [editionData, setEditionData] = useState<NormalizedBook | null>(null);

	const bookkey = book.key.replace("/works", "");

	useEffect(() => {
		const saved = localStorage.getItem(`pagesRead-${bookkey}`);
		if (saved) {
			setPagesRead(Number(saved));
		}
	}, [bookkey]);

	useEffect(() => {
		localStorage.setItem(`pagesRead-${bookkey}`, String(pagesRead));
	}, [pagesRead, bookkey]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const handleEditionLoaded = (editionData: NormalizedBook) => {
		setEditionData(editionData);

		let pageCount = 0;
		if (editionData.number_of_pages) {
			pageCount = editionData.number_of_pages;
		} else if (editionData.pages) {
			pageCount = editionData.pages;
		} else if (editionData.page_count) {
			pageCount = editionData.page_count;
		}

		if (pageCount > 0) {
			console.log(`Found pages for ${book.title}: ${pageCount}`);
			setTotalPages(pageCount);
		} else {
			console.log(`No page count found for ${book.title} in edition data:`, editionData);
		}
	};

	const handleClick = () => {
		setIsOpen(true);
	};

	return (
		<>
			<div className="book-card" onClick={handleClick}>
				<img
					src={`https://covers.openlibrary.org/b/id/${book.cover_i}-${book.Size || "M"}.jpg`}
					alt={`${book.title} cover`}
				/>
				<h3>{book.title}</h3>
				<p>{book.author_name?.join(", ")}</p>
				<p>{book.first_publish_year}</p>
				<div className="action">{children}</div>
			</div>

			{isOpen && (
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					<ModalBookDetails bookkey={bookkey} onEditionLoaded={handleEditionLoaded} />
					<ModalTextArea />
					{totalPages > 0 && (
						<ModalNumberOfPagesRead
							maxPage={totalPages}
							pagesRead={pagesRead}
							onPagesReadChange={setPagesRead}
						/>
					)}
				</Modal>
			)}
		</>
	);
};

export default BookCard;
