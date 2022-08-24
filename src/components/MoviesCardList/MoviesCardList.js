import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
    return (
        <>
            <div className='films'>
                {movies.map((movie) => (
                    <MoviesCard key={movie._id} movie={movie} saved={false} />
                ))}
            </div>
            <div className="more__wrapper">
                <p className="more__caption">Ещё</p>
            </div>
        </>
    )
}

export default MoviesCardList;
