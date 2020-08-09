import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchNewsArticle } from '../actions/index.js';
import FetchNewsArticle from '../containers/FetchNewsArticle';


export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: '',

    }
  }

  onInputChange = event => this.setState({ article: event.target.value })

  onFormSubmit = event => {
    event.preventDefault()

    this.props.fetchNewsArticle(this.state.article)
    // this.props.addArticle(this.state.article)
    this.setState({ article: '' })
  }

  render() {

    return (

      <form onSubmit={this.onFormSubmit}>
        <input type="text"
          placeholder=" Search news articles"
          value={this.state.article}
          onChange={this.onInputChange} />
        <button type="submit" >Search</button>
        <FetchNewsArticle />

      </form>
    )
  }
}


export default connect(null, { fetchNewsArticle })(SearchBar)

