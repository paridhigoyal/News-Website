import React from 'react';

import '../App.css';


function TopNews({ topnews }) {

    const headline = topnews.topnews.articles;
    // {console.log(topnews)}
    return topnews.loading ? (
        <h2>loading</h2>) : topnews.error ? (<h2> {topnews.error}</h2>) :
            <ul>
               <center> <h2>Top Headlines</h2></center>
                {headline && headline.map((item, index) =>
                    // <Link to={`news/${item.title}`}>
                    // <li key={index}>{item.title}</li> 
                    // </Link>
                    <div className="text" >
                        <img alt="newsimg" src={item.urlToImage} width="80" height="80" />
                        <a href={item.url} target="_blank" rel="noopener noreferrer"><h3 className="text" >{item.title}</h3>
                        </a> <h3 className="text">{item.description}</h3></div>
                )}

            </ul>
};


export default TopNews