import { api } from "@/Ultis/apiUltis"
import { MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAIL } from "./constants";

const actFetchData = (movieId) => {
    return (dispatch) => {
        dispatch(actMovieDetailRequest())
        
        api
        .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`)

        .then((result) => dispatch(actMovieDetailSuccess(result.data.content)))
        .catch((error) => dispatch(actMovieDetailFail(error)))
    }
}

const actMovieDetailRequest = () => {
    return {
        type: MOVIE_DETAIL_REQUEST
    }
}

const actMovieDetailSuccess = (data) => {
    return {
        type: MOVIE_DETAIL_SUCCESS,
        payload: data
    }
}

const actMovieDetailFail = (error) => {
    return {
        type: MOVIE_DETAIL_FAIL,
        payload: error
    }
}

export { actFetchData }