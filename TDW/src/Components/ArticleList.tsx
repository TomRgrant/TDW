import React from "react";
import styled from "styled-components";

const ArticleCard = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #007bff55 0%, #00bfff69 100%);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  .article-title {
    color: black;
  }

  .hover:hover {
    cursor: pointer;
  }
`;

const ArticleTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ArticleAuthor = styled.h3`
  font-size: 1rem;
  color: gray;
`;

const ArticleList = (props) => {
  return (
    <ArticleCard className="hover">
      <ArticleTitle className="article-title">{props.article.title}</ArticleTitle>
      <ArticleAuthor>{props.article.author}</ArticleAuthor>
    </ArticleCard>
  );
};

export default ArticleList;
