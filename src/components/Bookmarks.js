import React from 'react';
import { connect } from 'react-redux';

import NewsItem from './NewsItem';

const Bookmarks = ({ bookmarkItems }) => {
    return (
        <div>

            <p >Bookmarks</p>
            <p >
                {bookmarkItems.length === 0 ? (
                    <h5>
                        You have {bookmarkItems.length} Bookmarks(s)
                </h5>
                ) : (
                        <h5> {bookmarkItems.length} Bookmarks(s)</h5>
                    )}
            </p>

            {bookmarkItems.map((item, i) => (<div>
                <NewsItem key={i} item={item} />
                title: <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
            </div>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    bookmarkItems: state.bookmarks.bookmarkItems,

});

export default connect(
    mapStateToProps,
    null
)(Bookmarks);