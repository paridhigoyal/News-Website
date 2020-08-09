import {
    FETCH_TOP_NEWS_REQUEST,
    FETCH_TOP_NEWS_SUCCESS,
    FETCH_TOP_NEWS_FAILURE,

} from '../actions/actionTypes'

const initialState = {
    loading: false,
    topnews: [],
    error: '',

}

const topnews = (state = initialState, action) => {
    // console.log(action.type)
    switch (action.type) {

        case FETCH_TOP_NEWS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_TOP_NEWS_SUCCESS:
            return {
                loading: false,
                topnews: action.payload,
                error: ''
            }

        case FETCH_TOP_NEWS_FAILURE:
            return {
                loading: false,
                topnews: [],
                error: action.payload
            }

        default: return state
    }
}

export default topnews;