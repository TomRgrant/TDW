import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const ArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 4rem;
  margin: auto;
`;


const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const ArticleInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: Center;
    gap: 1.3rem;

  .author{
    font-size: 2rem;
  }

  .source {
    font-size: 1.5rem;
  }

  .date {
    font-size: 1.1rem
  }

  .url {
    color: black;
    font-size: 1.5rem;
    font-family: Georgia, 'Times New Roman', Times, serif
  }

  .url:hover {
    cursor: pointer;
  }
`;

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
    <PageContainer>
    <ArticleCard>
      {article && (
        <>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleInfo>
            <p className="author"> Author: {article.author}</p>
            <p className="source">Source - {article.source.name}</p>
            <p className="date">Date Published {article.publishedAt}</p>
            <a className="url" href={article.url}>Read More Here</a>
          </ArticleInfo>
        </>
      )}
    </ArticleCard>
    </PageContainer>
  );
};

export default ArticleContainer;
