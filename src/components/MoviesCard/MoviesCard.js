import React from "react";
import { useLocation } from "react-router";
import './MoviesCard.css';

const MovieCard = ({
    movie,
    onLikeClick,
    onDislikeClick,
    savedMovies
}) => {

    let location = useLocation();
    const savedPage = location.pathname === '/saved-movies' ? true : false;

    const handleLikeClick = (movie) => {
        if (savedMovies.find((m) => m.movieId === movie.id)) {
            handleDislikeClick(movie)
        } else {
            onLikeClick(movie);
        }
    };

    const handleDislikeClick = (movie) => {
        onDislikeClick(movie);
    };

    return (
        <div className="film__container">
            <a href={movie.trailerLink} target="_blank" rel="noreferrer">
                <img src={savedPage ? movie.image : `https://api.nomoreparties.co${movie.image.url}`}
                    className="film__image"
                    alt={movie.nameRU || movie.nameEN} />
            </a>
            <div className="film__description">
                <p className="film__title">{movie.nameRU || movie.nameEN}</p>
                <button
                    className="film__like-container"
                    type='button'
                    onClick={savedPage
                        ? () => { handleDislikeClick(movie) }
                        : () => {
                            if (!(savedMovies.some((i) => i.movieId === movie.id))) {
                                handleLikeClick(movie)
                            } else {
                                const movieToDislike = savedMovies.find((i) => i.movieId === movie.id);
                                handleDislikeClick(movieToDislike)
                            }
                        }
                    }>
                    <div
                        className={savedPage
                            ? 'film__delete-from-favourite'
                            : savedMovies.some((m) => m.movieId === movie.id)
                                ? 'film__liked'
                                : 'film__unliked'
                        }
                        alt="Кнопка лайка" />
                </button>
            </div>
            <p className="film__duration">{movie.duration}</p>
        </div>
    )
}

export default MovieCard;