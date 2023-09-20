import React, { useEffect, useState, ChangeEvent } from "react";
import ArticleList from "../Components/ArticleList";
import { Link } from 'react-router-dom';

const apiKey = 'aaa464023fc9435091f51c131530c881';

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
    <>
      <section>
        <input onChange={searching} type="text" placeholder="Search" />
        <button onClick={search}>Search</button>
        <button onClick={() => handleFilterChange('popularity')}>Filter by Popularity</button>
        <button onClick={() => handleFilterChange('publishedAt')}>Filter by Recent First</button>
      </section>

      <section>
        <h1>Total results for <span style={{ textDecoration: 'underline' }}>{searchTerm}</span> {articles.totalResults}</h1>
        <div className="article-list">
          {articles.articles.map((article, index) => (
            <ArticleList key={index} article={article} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeContainer;
