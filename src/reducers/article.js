import {
    FETCH_NEWS_ARTICLE_REQUEST,
    FETCH_NEWS_ARTICLE_SUCCESS,
    FETCH_NEWS_ARTICLE_FAILURE,

} from '../actions/actionTypes'

const initialState = {
    loading: false,
    article: [],
    error: '',

}

const article = (state = initialState, action) => {
    // console.log(action.type)
    switch (action.type) {

        case FETCH_NEWS_ARTICLE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_NEWS_ARTICLE_SUCCESS:
            return {
                loading: false,
                article: action.payload,
                error: ''
            }

        case FETCH_NEWS_ARTICLE_FAILURE:
            return {
                loading: false,
                article: [],
                error: action.payload
            }

        default: return state
    }
}

export default article;