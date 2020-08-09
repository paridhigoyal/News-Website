import { connect } from 'react-redux';
import { fetchNewsArticle, bookmarkItem, unBookmarkItem } from '../actions/index';
import NewsArticle from '../components/NewsArticle';

const mapStateToProps = state => {
  return {
    article: state.article,
    bookmarkItems: state.bookmarks.bookmarkItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNewsArticle: (article) => dispatch(fetchNewsArticle(article)),
    bookmarkItem: (items) => dispatch(bookmarkItem(items)),
    unBookmarkItem: (items) => dispatch(unBookmarkItem(items)),

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsArticle)
