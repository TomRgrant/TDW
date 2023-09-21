import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from './Containers/HomeContainer';
import ArticleContainer from './Containers/ArticleContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/article/:id" element={<ArticleContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
