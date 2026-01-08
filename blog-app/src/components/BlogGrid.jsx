import BlogCard from "./BlogCard";
import { useFetchArticles } from "../hooks/useFetchArticles";
import { Link } from "react-router-dom";


const BlogGrid = ({ search }) => {
  const { articles, loading, error, hasMore, loadMore} =
    useFetchArticles(search);

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-80 animate-pulse rounded-xl bg-gray-200" />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <Link
            to={`article/${article.title}`}
            key={i}
            state={{ article}}
          >
            <BlogCard
              image={
                article.urlToImage || "https://placehold.co/600x400/000000/FFF"
              }
              title={article.title}
              description={article.description}
              author={article.author || "Unknown Author"}
              date={new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              avatar={`https://i.pravatar.cc/40?img=${i + 1}`}
            />
          </Link>
        ))}
      </div>
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
};

export default BlogGrid;
