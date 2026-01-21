import { useContext, useEffect, useState } from "react";
import { searchContext } from "../context/searchContext";

export const useFetchArticles = (selectedCountry,selectedCategory) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const {search}=useContext(searchContext)
  
  useEffect(() => {
    setArticles([]);
    setPage(1);
    setHasMore(true);
  }, [selectedCountry, selectedCategory,search]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/news?q=${search}&country=${selectedCountry}&category=${selectedCategory}&page=${page}`,
          { signal: controller.signal, credentials: "include" },
        );

        if (!res.ok) {
          throw new Error("Request failed");
        }

        const data = await res.json();

        if (!Array.isArray(data.articles) || data.articles.length === 0) {
          setHasMore(false);
          setError(`No Articles Found from ${selectedCountry} in ${selectedCategory}`);
          return;
        }

        setArticles((prev) => [...prev, ...data.articles]);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Failed to load articles");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    return () => controller.abort();
  }, [page, selectedCategory, selectedCountry,search]);

  console.log(articles)
  return {
    articles,
    loading,
    error,
    hasMore,
    loadMore: () => setPage((p) => p + 1),
  };
};
