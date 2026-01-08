import { useEffect,useState } from "react";

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

      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=6&apikey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`,
          { signal: controller.signal }
        );

        const data = await res.json();
        console.log(data);
        if (data.articles?.length === 0) {
          setHasMore(false);
        } else {
          setArticles((prev) => [...prev, ...data.articles]);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Failed to load articles");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
    return () => {
      controller.abort();
    };
  }, [page]);

  return {
    articles,
    loading,
    error,
    hasMore,
    loadMore: () => setPage((p) => p + 1),
  };
};
