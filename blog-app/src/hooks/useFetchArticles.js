import { useEffect, useState } from "react";

export const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/news?page=${page}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("Request failed");
        }

        const data = await res.json();

        if (!Array.isArray(data.articles) || data.articles.length === 0) {
          setHasMore(false);
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
  }, [page]);

  return {
    articles,
    loading,
    error,
    hasMore,
    loadMore: () => setPage((p) => p + 1),
  };
};
