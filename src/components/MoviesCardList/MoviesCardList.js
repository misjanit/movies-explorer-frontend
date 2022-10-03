import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({
    movies,
    onLikeClick,
    onDislikeClick,
    moviesListLength,
    savedMovies
}) => {

    return (
        <>
            <div className='films'>
                {movies.map((movie) => (
                    <MoviesCard
                        movie={movie}
                        key={movie.id ? movie.id : movie.movieId}
                        onLikeClick={onLikeClick}
                        onDislikeClick={onDislikeClick}
                        savedMovies={savedMovies}
                    />
                )).slice(0, moviesListLength)}
            </div>

        </>
    )
}

export default MoviesCardList;
