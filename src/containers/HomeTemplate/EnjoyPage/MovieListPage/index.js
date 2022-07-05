import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../MovieListPage.scss";
import { actFetchData } from "../reducer/actions";
import MovieItem from "../MovieItem";
import Loader from "@/components/Loader"

function MovieListPage () {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.listMovieReducer);

  useEffect(() => {
    dispatch(actFetchData());
  }, []);

  const renderMovieItem = () => {
    const { movieList, movieType, loading } = data;
    if (loading) {
      return <Loader/>
    } else {

      if (movieType === 'now') {
        return movieList?.map((movie) => {
          if (movie.dangChieu) //Check if movie is available now
          return <MovieItem key={movie.maPhim} movie={movie} />;
        });
      } else {
        return movieList?.map((movie) => {
          if (movie.sapChieu) //Check if movie is coming soon
          return <MovieItem key={movie.maPhim} movie={movie} />;
        });
      }

    }
    
  };
  return (
      <div className="movie-list__movies container mt-5">
        {renderMovieItem()}
      </div>
  );
}

export default MovieListPage 