import React, { useState } from "react";

type BookResult = {
	key: string;
	title: string;
	author_name?: string[];
	cover_i?: number;
	first_publish_year?: number;
};

const BookSearch: React.FC = () => {
	const [query, setQuery] = useState<string>("");
	const [results, setResults] = useState<BookResult[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const searchBooks = async (): Promise<void> => {
		if (!query) return;
		setLoading(true);
		try {
			const response = await fetch(
				`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
			);
			const data = await response.json();
			setResults(data.docs.slice(0, 10));
		} catch (error) {
			console.error("Fel vid hämtning:", error);
		}
		setLoading(false);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === "Enter") {
			searchBooks();
		}
	};

	const getCoverImage = (coverId?: number): string => {
		return coverId
			? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
			: "https://via.placeholder.com/100x150?text=No+Cover";
	};

	return (
		<div className="book-search">
			<input
				type="text"
				placeholder="Sök efter en bok..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyDown={handleKeyPress}
				className="search-input"
			/>

			{loading && <p>Söker...</p>}

			<ul className="Search-List">
				{results.map((book) => (
					<li key={book.key} className="flex space-x-4 border rounded p-4 shadow-sm">
						<img
							src={getCoverImage(book.cover_i)}
							alt={book.title}
							className="w-24 h-auto object-cover rounded"
						/>
						<div>
							<a
								href={`https://openlibrary.org${book.key}`}
								target="_blank"
								rel="noopener noreferrer"
								className="result-link"
							>
								{book.title}
							</a>
							{book.author_name && <p>Av: {book.author_name.join(", ")}</p>}
							{book.first_publish_year && <p>Först publicerad: {book.first_publish_year}</p>}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BookSearch;
