import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
    return (
        <div className='films'>
            {movies.map((movie) => (
                <MoviesCard key={movie._id} movie={movie} saved={false} />
            ))}
        </div>
    )
}

export default MoviesCardList;
