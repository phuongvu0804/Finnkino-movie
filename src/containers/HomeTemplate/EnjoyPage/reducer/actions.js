import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAIL,
  MOVIE_TYPE_NOW,
  MOVIE_TYPE_SOON,
} from "./constants";
import { api } from "@/Ultis/apiUltis";

const actFetchData = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());

    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((result) => dispatch(actListMovieSuccess(result.data.content)))
      .catch((error) => dispatch(actListMovieFail(error)));
  };
};

const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFail = (error) => {
  return {
    type: LIST_MOVIE_FAIL,
    payload: error,
  };
};

const actMovieTypeNow = () => {
  return {
    type: MOVIE_TYPE_NOW,
  };
};

const actMovieTypeSoon = () => {
  return {
    type: MOVIE_TYPE_SOON,
  };
};

export { actFetchData, actMovieTypeNow, actMovieTypeSoon };
