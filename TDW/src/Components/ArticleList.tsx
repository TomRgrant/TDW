import React from "react";


const ArticleList = (props) => {


    return (
        <>
        <div style={{padding: '10px', border: '2px solid dodgerblue'}}>
            <h1>{props.article.title}</h1>
            <h3>{props.article.author}</h3>
        </div>
        </>
    );
};

export default ArticleList;