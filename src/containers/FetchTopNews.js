import { connect } from 'react-redux';
import { fetchTopNews } from '../actions/index';
import TopNews from '../components/TopNews';

const mapStateToProps = state => {
  return {
    topnews: state.topnews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTopNews: () => dispatch(fetchTopNews())

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNews)