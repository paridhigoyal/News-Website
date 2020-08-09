import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchTopNews } from "../actions/index";

import FetchTopNews from '../containers/FetchTopNews';

export class TopNewsHeadline extends Component {
    componentDidMount() {

        this.props.fetchTopNews();
    }
    render() {
        return (
            <div>
                <FetchTopNews />
            </div>
        )
    }
}

export default connect(
    null,
    { fetchTopNews }
)(TopNewsHeadline);