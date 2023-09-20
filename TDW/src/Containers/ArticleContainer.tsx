import React from "react";

const ArticleContainer = (props) => {


console.log(props);


    return (
        <>
        <h1>Articles</h1>
        <p>{props.title}</p>
        </>
    );
};

export default ArticleContainer;