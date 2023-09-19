import React, { useEffect, useState } from "react";
import ArticleList from "../Components/ArticleList";

const HomeContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState({ totalResults: 0, articles: [] });

  const searching = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const search = async () => {
    const apiKey = 'aaa464023fc9435091f51c131530c881';
    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(articles.articles);

  return (
    <>
      <section>
        <input onChange={searching} type="text" placeholder="Search" />
        <button onClick={search}>Search</button>
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
