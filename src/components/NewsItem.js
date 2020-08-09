
import React from 'react';
import { connect } from 'react-redux';
import { bookmarkItem, unBookmarkItem } from '../actions/index';

const NewsItem = ({ item, key, bookmarkItem, bookmarkItems, unBookmarkItem }) => {

  const isBookmark = item => {
    if (bookmarkItems !== null) {
      return (
        bookmarkItems.findIndex(bookmark => bookmark.title === item.title) > -1
      );
    }
  };

  const bookmark = item => {
    bookmarkItem(item);
    console.log(bookmarkItem(item))
  };

  const unBookmark = item => {
    unBookmarkItem(item);
  };

  return (isBookmark(item) ? (
    <button type="button" onClick={() => unBookmark(item)}> unBookmark</button>)
    : (
      <button type="button" onClick={() => bookmark(item)}> Bookmark </button>
    ))
  //  <button onClick = {() => bookmark(item)}> Bookmark </button>
}

const mapStateToProps = state => ({
  bookmarkItems: state.bookmarks.bookmarkItems
});

export default connect(
  mapStateToProps,
  { bookmarkItem, unBookmarkItem }
)(NewsItem);