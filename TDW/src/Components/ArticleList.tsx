import React from "react";

const ArticleList = (props) => {




    return(
        <>
            <div style={{border: '5px solid dodgerblue', padding: '1rem'}}>
                <h1>{props.article.title}</h1>
                <h3>{props.article.author}</h3>
            </div>
        </>
    );
};

export default ArticleList;