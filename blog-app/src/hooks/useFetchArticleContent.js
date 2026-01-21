import { useEffect, useState } from "react";


const useFetchArticleContent = (article) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!article?.url) return;

    const fetchData = async () => {
      setLoading(true);
      setMessage('');
      setContent('');

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/article?url=${encodeURIComponent(article.url)}`
        );

        
        if (!res.ok) {
          console.log('res not ok')
          setMessage("⚠️ Article content is not available.");
          return;
        }

        const data = await res.json();

        if (!data?.html) {
          setMessage("⚠️ No content found for this article.");
          return;
        }

        setContent(data.html);
      } catch (err) {
        console.log(err);
        setMessage("Something went wrong, please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [article?.url]);


 

  return { loading, content, message };
};

export default useFetchArticleContent;
