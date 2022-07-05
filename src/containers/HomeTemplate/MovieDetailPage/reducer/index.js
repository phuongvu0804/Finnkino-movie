import { MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAIL } from './constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const movieDetailReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case MOVIE_DETAIL_REQUEST:
            state.loading = true
            state.data = null
            state.error = null
            return {...state}

        case MOVIE_DETAIL_SUCCESS:
            state.loading = false
            state.data = action.payload
            state.error = null
            return {...state}

        case MOVIE_DETAIL_FAIL:
            state.loading = false
            state.data = null
            state.error = action.payload
            return {...state}
            
        default:
            return {...state}
    }
}

export default movieDetailReducer