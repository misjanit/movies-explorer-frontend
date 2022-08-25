import React from "react";
import './MoviesCard.css';

const MovieCard = ({ movie }) => {
    const changeLikeButtonClass = `film__unliked ${movie.like ? "film__liked" : ""}`;

    return (
        <div className="film__container">
            <img src={movie.image}
                className="film__image"
                alt={movie.alt} />
            <div className="film__description">
                <p className="film__title">{movie.title}</p>
                <button className="film__like-container" type='button'>
                    <div
                        className={changeLikeButtonClass}
                        alt="Кнопка лайка" />
                </button>
            </div>
            <p className="film__duration">{movie.time}</p>
        </div>
    )
}

export default MovieCard;