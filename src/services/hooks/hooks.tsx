import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthorResult, BookResult } from "services/types";
export function useDebounce(value: string, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
}

export const useCombinedSearch = () => {
	const [search, setSearch] = useState("");
	const debouncedSearchTerm = useDebounce(search, 300);

	const {
		data: bookData = [],
		isLoading: isBooksLoading,
		error: bookError,
	} = useQuery<BookResult[]>({
		queryKey: ["books", debouncedSearchTerm],
		queryFn: async () => {
			if (!debouncedSearchTerm) return [];
			const res = await fetch(`https://openlibrary.org/search.json?q=${debouncedSearchTerm}`);
			const json = await res.json();
			return json.docs || [];
		},
		enabled: !!debouncedSearchTerm,
	});

	const {
		data: authorData = [],
		isLoading: isAuthorsLoading,
		error: authorError,
	} = useQuery<AuthorResult[]>({
		queryKey: ["authors", debouncedSearchTerm],
		queryFn: async () => {
			if (!debouncedSearchTerm) return [];
			const res = await fetch(`https://openlibrary.org/search/authors.json?q=${debouncedSearchTerm}`);
			const json = await res.json();
			return json.docs || [];
		},
		enabled: !!debouncedSearchTerm,
	});

	return {
		search,
		setSearch,
		debouncedSearchTerm,
		books: bookData,
		authors: authorData,
		isLoading: isBooksLoading || isAuthorsLoading,
		error: bookError || authorError,
	};
};
