import React from "react";


const ArticleList = (props) => {

console.log('hahahahahahahahaahhaahahahahaha',props);


    return (
        <>
        <div style={{padding: '10px', border: '2px solid dodgerblue'}}>
            <h1>{props.article.title}</h1>
            <p>{props.article.author}</p>
        </div>
        </>
    );
};

export default ArticleList;