import { combineReducers } from 'redux';
import article from './article';
import topnews from "./topnews";
import bookmarks from './bookmarks';
export default combineReducers({
    article,
    topnews,
    bookmarks
});