import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Define a type for the article data
interface Article {
  title: string;
  url: string;
  author: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

const ArticleContainer = () => {
  const { id } = useParams<{ id: string }>(); // Access the 'id' parameter from the URL

  const apiKey = 'aaa464023fc9435091f51c131530c881';

  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const search = async () => {
      const url = `https://newsapi.org/v2/everything?q=${id}&apiKey=${apiKey}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setArticle(data.articles[0]);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    search();
  }, [id, apiKey]);

  return (
    <>
      {article && (
        <div>
          <h1>{article.title}</h1>
          <p>{article.url}</p>
          <p>{article.author}</p>
          <p>{article.publishedAt}</p>
          <p>{article.source.name}</p>
        </div>
      )}
    </>
  );
};

export default ArticleContainer;
