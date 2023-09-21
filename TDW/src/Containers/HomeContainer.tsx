import React, { useEffect, useState, ChangeEvent } from "react";
import ArticleList from "../Components/ArticleList";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const apiKey = 'aaa464023fc9435091f51c131530c881';

const StyledHomeContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const SearchSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

    .place-white::placeholder{
        color: white;
    }
  
  input[type="text"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const ResultsSection = styled.section`
  text-align: center;

  .search-title {
    text-decoration: underline;
    margin-bottom: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-underline-offset: 3px;
    color: #000000;
  }

  .no-deco{
    text-decoration: none;
  }

`;

const HomeContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [articles, setArticles] = useState<{ totalResults: number; articles: any[] }>({ totalResults: 0, articles: [] });
  const [filter, setFilter] = useState<string>("publishedAt");

  const searching = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const search = async () => {
    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=${filter}&apiKey=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterChange = (filterVal: string) => {
    setFilter(filterVal);
    search();
  }

  return (
    <StyledHomeContainer>
      <SearchSection>
        <input className="place-white" onChange={searching} type="text" placeholder="Search    🔍" />
        <button onClick={search}>Search</button>
        <button onClick={() => handleFilterChange('popularity')}>Filter by Popularity</button>
        <button onClick={() => handleFilterChange('publishedAt')}>Filter by Recent First</button>
      </SearchSection>

      <ResultsSection>
        <h1 className="search-title">Total results for <span>{searchTerm}</span> {articles.totalResults}</h1>
        <div className="article-list">
          {articles.articles.map((article, index) => (
            <Link className="no-deco" to={`/article/${article.title}`} key={index}>
              <ArticleList article={article} />
            </Link>
          ))}
        </div>
      </ResultsSection>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
