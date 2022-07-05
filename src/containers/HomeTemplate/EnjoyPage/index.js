import { useSelector, useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import "./MovieListPage.scss";
import Button from "@/components/Button";
import { actMovieTypeNow, actMovieTypeSoon } from "./reducer/actions";

function EnjoyPage() {
  const loading = useSelector((state) => state.listMovieReducer.loading);
  const dispatch = useDispatch();
  
  return (
    <div id="movie-list-page">
      <div className="movie-list__carousel">
        <img />
      </div>
      <div className="movie-list__btns">
        <NavLink
          className={({ isActive }) =>
            isActive ? "movie-list__btn active" : "movie-list__btn"
          }
          to="/nauti/ohjelmistossa"
        >
          <Button
            outline
            small
            className="movie-list__btn"
            onClick={() => dispatch(actMovieTypeNow())}
          >
            Now showing
          </Button>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "movie-list__btn active" : "movie-list__btn"
          }
          to="/nauti/tulossa"
        >
          <Button
            outline
            small
            className="movie-list__btn"
            onClick={() => dispatch(actMovieTypeSoon())}
          >
            Coming soon
          </Button>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default EnjoyPage