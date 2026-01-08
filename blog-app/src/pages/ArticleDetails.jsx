import { useLocation } from "react-router-dom";
import Container from "../components/Container";
import ArticleDetailsSkeleton from "./../components/ArticleDetailsSkeleton";
import useFetchCategory from "../hooks/useFetchCategory";
import useFetchArticleContent from "../hooks/useFetchArticleContent";

const ArticleDetails = () => {
  const { state } = useLocation();
  const { article} = state;
  const { category } = useFetchCategory(article.title, article.description);
  const { loading, content, message } = useFetchArticleContent(article);
console.log(state)




  

  if (!article) {
    return (
      <Container>
        <p className="text-center text-red-500">Article not found</p>
      </Container>
    );
  }

  if (loading) {
    return (
      <div className="mt-5">
        <ArticleDetailsSkeleton />
      </div>
    );
    
  }

  return (
    <main className="py-10">
      <Container>
        {message ? (
          <p className="text-red-600">{message}</p>
        ) : (
          <article className="mx-auto max-w-3xl">
            <span className="text-sm font-medium text-[#4B6BFB] bg-indigo-100 p-1.5  rounded-md  mb-4">
              {category}
            </span>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 mb-5">
              {article.title}
            </h1>

            <div className="mt-4 flex items-center gap-6 w-71.75 mb-8 ">
              <div className="text-sm flex gap-4 flex-1 items-center ">
                <img
                  src="../../public/assets/images/noUser.jpeg"
                  alt={article.author}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <p className="max-w-30 truncate font-normal h-fit text-[16px] text-[#97989F]">
                  {article.author || "UnKnown Author"}
                </p>
              </div>
              <p className="text-[#97989F] text-[16px] font-normal">
                {new Date(article.publishedAt).toDateString()}
              </p>
            </div>

            {/* Content */}
            <div className="article-content">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </article>
        )}
      </Container>
    </main>
  );
};

export default ArticleDetails;
