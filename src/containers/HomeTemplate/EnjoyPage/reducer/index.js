import { LIST_MOVIE_REQUEST, LIST_MOVIE_SUCCESS, LIST_MOVIE_FAIL, MOVIE_TYPE_NOW, MOVIE_TYPE_SOON } from './constants'

const initialState = {
    loading: false,
    movieList: null,
    movieType: 'now',
    error: null,
    
}

const listMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_MOVIE_REQUEST:
            state.loading = true
            state.movieList = null
            state.error = null
            return {...state}

        case LIST_MOVIE_SUCCESS:
            state.loading = false
            state.movieList = action.payload
            state.error = null
            return {...state}

    case LIST_MOVIE_FAIL:
            state.loading = false
            state.movieList = null 
            state.error = action.payload
            return {...state}
    case MOVIE_TYPE_NOW:
            state.movieType = 'now'
            return {...state}
    case MOVIE_TYPE_SOON:
            state.movieType = 'soon'
            return {...state}
        default:
            return {...state}
    }

}

export default listMovieReducer