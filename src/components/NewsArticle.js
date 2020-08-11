import React from 'react';
import NewsItem from './NewsItem';



function NewsArticle({ article, bookmarkItem, bookmarkItems, unBookmarkItem }) {
    // var isBookmark=false;
    // const bookmark=()=>{
    //     console.log(isBookmark)
    // isBookmark=true;
    // }
    // console.log(isBookmark);
    const articles = article.article.articles;
    //  console.log(articles)
    return article.loading ? (
        <h2>loading</h2>) : article.error ? (<h2> {article.error}</h2>) :
            <ul>
                {articles && articles.map((item, i) => <div>
                    <a href={item.url} target="_blank"rel=" noopener noreferrer"  ><h3>{item.title}</h3></a>
                    <NewsItem bookmarkItem={bookmarkItem} unBookmarkItem={unBookmarkItem} key={i} item={item} bookmarkItems={bookmarkItems} />
                    {/* <button onclick={() =>isBookmark=true}>Bookmark</button> */}

                </div>


                )}

            </ul>
};


export default NewsArticle