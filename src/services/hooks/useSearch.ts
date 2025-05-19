import { useQuery } from "@tanstack/react-query";
import { BookResult, NormalizedBook } from "services/types";
import { useDebounce } from "./useDebounce";

export const useSearch = (search:string) => {
	
	const debouncedSearchTerm = useDebounce(search, 500);
	const isEnabled = !!debouncedSearchTerm
	const { isLoading, error, data } = useQuery({
		queryKey: ["search", debouncedSearchTerm],
		enabled: isEnabled,
		staleTime:1000*20,
		queryFn: async (): Promise<NormalizedBook[]> =>
			await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(debouncedSearchTerm)}&language=eng`)
				.then((res) => res.json())
				.then((data) => data.docs || [])
				.catch((error) => {
					console.error("Error", error);
					console.log("sending request")
					return [];
				}),
	});
	return {isLoading, error, data}
}
export default useSearch