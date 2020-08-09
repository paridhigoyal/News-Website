import {
    FETCH_NEWS_ARTICLE_REQUEST,
    FETCH_NEWS_ARTICLE_SUCCESS,
    FETCH_NEWS_ARTICLE_FAILURE,
    FETCH_TOP_NEWS_FAILURE,
    FETCH_TOP_NEWS_REQUEST,
    FETCH_TOP_NEWS_SUCCESS,
    BOOKMARK_ITEM,
    UNBOOKMARK_ITEM,
    GET_BOOKMARK_ITEMS,
    // ADD_ARTICLE,
    API_KEY,
} from './actionTypes';
// let nextArticleId=0;
export function fetchNewsArticle(article) {
    return (dispatch) => {

        dispatch(fetchNewsArticleRequest())
        fetch(`https://newsapi.org/v2/everything?q=${article}&apiKey=${API_KEY}`)
            .then(response => response.json()).then(data => {

                const article = data
                // console.log(article);
                dispatch(fetchNewsArticleSuccess(article))
            })
            .catch(error => {

                dispatch(fetchNewsArticleFailure(error.message))
            })
    }
}
export function fetchTopNews() {
    return (dispatch) => {

        dispatch(fetchTopNewsRequest())
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            .then(response => response.json()).then(data => {

                const news = data
                //    console.log(news)
                dispatch(fetchTopNewsSuccess(news))
            })
            .catch(error => {

                dispatch(fetchTopNewsFailure(error.message))
            })
    }
}
export const fetchNewsArticleRequest = () => {
    return {
        type: FETCH_NEWS_ARTICLE_REQUEST
    }
}

export const fetchNewsArticleSuccess = article => {
    return {
        type: FETCH_NEWS_ARTICLE_SUCCESS,
        payload: article
    }
}

export const fetchNewsArticleFailure = error => {
    return {
        type: FETCH_NEWS_ARTICLE_FAILURE,
        payload: error
    }
}
export const fetchTopNewsRequest = () => {
    return {
        type: FETCH_TOP_NEWS_REQUEST,
    }
}

export const fetchTopNewsSuccess = news => {
    return {
        type: FETCH_TOP_NEWS_SUCCESS,
        payload: news
    }
}

export const fetchTopNewsFailure = error => {
    return {
        type: FETCH_TOP_NEWS_FAILURE,
        payload: error
    }
}
export function bookmarkItem(item) {
    return {
        type: BOOKMARK_ITEM,
        payload: item
    }
}
export function unBookmarkItem(item) {
    return {
        type: UNBOOKMARK_ITEM,
        payload: item
    }
}
export const getBookmarkItems = (item) => () => {
    return {
        type: GET_BOOKMARK_ITEMS,
        payload: item
    }
}