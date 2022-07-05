import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faAt,
  faFilter,
  faHeart,
  faPlay,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import "./MovieDetailPage.scss";
import Button from "@/components/Button";
import { actFetchData } from "./reducer/actions";
import Loader from "@/components/Loader";
import PageNotFound from "@/containers/PageNotFound";
import Image from "@/components/Image";

function MovieDetailPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieDetailReducer.data);
  const error = useSelector((state) => state.movieDetailReducer.error);
  const loading = useSelector((state) => state.movieDetailReducer.loading);

  const movieID = useParams();
  useEffect(() => {
    dispatch(actFetchData(movieID.id));
  }, []);

  const renderMovieDetail = () => {
    if (loading) {
      return <Loader />;
    } else if (error) {
      return <PageNotFound />;
    } else if (data) {
      return (
        <div id="movie-detail-page">
          <div className="movie-detail__img-wrapper">
            <div className="movie-detail__top-info pb-5">
              <div className="movie-detail__top-info-wrapper container">
                <div className="top-info__img">
                  <Image src={data.hinhAnh} alt={data.tenPhim}/>
                </div>
                <div className="top-info__content">
                  <h3 className="top-info__content-title mb-3">
                    {data.tenPhim}
                  </h3>
                  <Button
                    className="top-info__btn"
                    outline
                    small
                    leftIcon={<FontAwesomeIcon icon={faPlay} />}
                  >
                    Play Trailer
                  </Button>
                  <Button
                    className="top-info__btn"
                    filled
                    small
                    rightIcon={<FontAwesomeIcon icon={faAnglesRight} />}
                  >
                    Tickets
                  </Button>
                </div>
              </div>
            </div>
            <div className="movie-detail__top-desc">
              <div className="container d-flex justify-content-between">
                <div className="movie-detail__desc-left">
                  <p>
                    <FontAwesomeIcon
                      className="movie-detail__desc-icon"
                      icon={faHeart}
                    />
                    Rating: {data.danhGia}
                  </p>
                  <p>{data.hot && "Hot"}</p>
                </div>
                <div className="movie-detail__desc-right">
                  <Button
                    className="movie-detail__desc-btn desc-btn--facebook"
                    leftIcon={<FontAwesomeIcon icon={faFacebookF} />}
                  >
                    Share
                  </Button>
                  <Button
                    className="movie-detail__desc-btn desc-btn--twitter"
                    leftIcon={<FontAwesomeIcon icon={faTwitter} />}
                  >
                    Tweet
                  </Button>
                  <Button
                    className="movie-detail__desc-btn desc-btn--whatsapp"
                    leftIcon={<FontAwesomeIcon icon={faWhatsapp} />}
                  >
                    WhatsApp
                  </Button>
                  <Button
                    className="movie-detail__desc-btn desc-btn--email"
                    leftIcon={<FontAwesomeIcon icon={faAt} />}
                  >
                    E-mail
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-detail__content-wrapper">
            <div className="container">
              <div className="row">
                <div className="movie-detail__synop col-lg-7">
                  <h4>Synopsis</h4>
                  <p>{data.moTa}</p>
                </div>
                <div className="movie-detail__details col-lg-5">
                  <h4>Details</h4>
                  <p>Release Date: {data.ngayKhoiChieu}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-detail__ticket container">
            <h2>Get Tickets</h2>
            <div className="ticket__filter">
              <div class="ticket__filter-schedule row">
                <div className="form-group">
                  <select class="form-control" name="" id="">
                    <option>Choose area or cinema</option>
                    <option>Rạp 3</option>
                    <option>Rạp 4</option>
                    <option>Rạp 9</option>
                    <option>BHD Star Cineplex - 3/2</option>
                    <option>BHD Star Cineplex</option>
                    <option>CGV - Pandora City</option>
                    <option>CNS - Quốc Thanh</option>
                    <option>CineStar</option>
                    <option>CNS - Quốc Thanh</option>
                    <option>MegaGS - Cao Thắng</option>
                    <option>MegaGS</option>
                  </select>
                </div>
                <div className="form-group">
                  <select class="form-control" name="" id="">
                    <option>Today</option>
                    <option>Tomorrow</option>
                    <option>Tomorrow +1</option>
                    <option>Tomorrow +2</option>
                    <option>All day</option>
                  </select>
                </div>
              </div>
              <div className="ticket__filter-more">
                <Button leftIcon={<FontAwesomeIcon icon={faFilter} />}>
                  Filter shows
                </Button>
                <div className="ticket__filter-popup">
                  <div>
                    <p>Concepts</p>
                    <Button>2D</Button>
                  </div>
                  <div>
                    <p>Event Cinema and special show types</p>
                    <Button leftIcon={<FontAwesomeIcon icon={faUtensils} />}>
                      Catering
                    </Button>
                  </div>
                  <div>
                    <p>Subtitles</p>
                    <Button>Finnish</Button>
                    <Button>English</Button>
                  </div>
                  <div>
                    <p>Languages</p>
                    <Button>English</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="ticket__cinemas">
              <div className="ticket__cinema-item">
                <h3>Tennispalatsi, Helsinki</h3>
                <div className="cinema-item__details">
                  <p className="cinema-item__time">10:30</p>
                  <div className="cinema-item__info">
                    <h5>Tennispalatsi, Helsinki, sali 7</h5>
                    <div>
                      <p>Language: Dubbed in Finnish</p>
                      <p>Subtitles: No Subtitles</p>
                    </div>
                    <div>
                      <Button>2D</Button>
                      <Button leftIcon={<FontAwesomeIcon icon={faUtensils} />}>
                        Catering
                      </Button>
                    </div>
                  </div>
                  <div className="cinema-item__seat">
                    <div>
                      <p>available: 121/121</p>
                      <a>Seat Plan</a>
                    </div>
                    <Link to="/websales">
                      <Button
                        className="top-info__btn"
                        filled
                        small
                        rightIcon={<FontAwesomeIcon icon={faAnglesRight} />}
                      >
                        Tickets
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return renderMovieDetail();
}

export default MovieDetailPage;
