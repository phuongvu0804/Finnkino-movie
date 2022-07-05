import { combineReducers } from 'redux'
import listMovieReducer from '@/containers/HomeTemplate/EnjoyPage/reducer'
import movieDetailReducer from '@/containers/HomeTemplate/MovieDetailPage/reducer'

const rootReducer = combineReducers({
    listMovieReducer,
    movieDetailReducer
})

export default rootReducer