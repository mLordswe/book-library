// useBookDetails.ts
import { useEffect, useState } from "react";
import { NormalizedBook } from "../types";

const useBookDetails = (bookkey: string | null) => {
  const [bookData, setBookData] = useState<NormalizedBook | null>(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
     if (!bookkey) {
      console.warn("Ingen bookkey");
      return;
    }
   

    const fetchData = async () => {
        setLoading(true)
        console.log("🔍 Fetch URL:", `/api/works/${bookkey}.json`);
        const cleanedKey = bookkey.startsWith('/') ? bookkey.slice(1) : bookkey;
        console.log(`clenaed key: ${cleanedKey}`)
      try {
        const workRes = await fetch(`/api/works/${cleanedKey}.json`);
        const work = await workRes.json();
        
        const editionsRes = await fetch(`/api/works/${cleanedKey}/editions.json`);
        const editions = await editionsRes.json();
        const edition = editions.entries?.[0];
        const bookId = edition?.key?.split("/").pop();

        let bookDetails = null;
        if (bookId) {
          const bookRes = await fetch(`/api/books/${bookId}.json`);
          bookDetails = await bookRes.json();
        }

        const normalized: NormalizedBook = {
          key: work.key,
          title: work.title,
          description: work.description,
          number_of_pages: bookDetails?.number_of_pages,
          pages: bookDetails?.pages,
          page_count: bookDetails?.page_count,
          details: {
            number_of_pages: bookDetails?.number_of_pages,
            pagination: bookDetails?.pagination,
          },
          first_sentence: bookDetails?.first_sentence,
          publishers: bookDetails?.publishers,
          cover_i: edition?.covers?.[0],
          languages: work.languages?.[0],
        };

        const authorKey = work?.authors?.[0]?.author?.key;
        if (authorKey) {
          const authorRes = await fetch(`/api${authorKey}.json`);
          const author = await authorRes.json();
          normalized.author_name = [author.name];
        }

        setBookData(normalized);
      } catch (err) {
        setError(err as Error)
      }finally{
        setLoading(false)
      }
    };

    fetchData();
  }, [bookkey]);

  return bookData;
};

export default useBookDetails;
