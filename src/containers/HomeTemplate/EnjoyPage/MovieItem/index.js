import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@/components/Button";
import Image from "@/components/Image";
import { faAnglesRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

function MovieItem({ movie }) {
  return (
    <div className="movie-item mb-4 row">
      <div className="movie-item__left col-lg-2 col-md-2 col-sm-2">
        <Image
          className="movie-item__img"
          src={movie.hinhAnh}
          alt={movie.tenPhim}
        />
        <Button
          className="movie-item__watch-btn"
          href={movie.trailer}
          target="_blank"
        >
          <FontAwesomeIcon icon={faCirclePlay} />
        </Button>
      </div>
      <div className="movie-item__right col-lg-10 col-md-10 col-sm-10">
        <div className="movie-item__desc mb-4">
          <Link to={`/detail/${movie.maPhim}`} className="movie-item__title">
            {movie.tenPhim}
          </Link>
          <p>{movie.moTa}</p>
        </div>
        <div className="movie-item__info">
          <div className="movie-item__info-wrapper">
            <p className="movie-item__rating">Rating: {movie.danhGia}</p>
            <p className="movie-item__time">
              Release Date: {movie.ngayKhoiChieu}
            </p>
          </div>
          <Button
            filled
            large
            className="movie-item__buy-btn"
            rightIcon={<FontAwesomeIcon icon={faAnglesRight} />}
          >
            Tickets
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
