import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import * as moviesApi from '../../utils/MoviesApi';
import { useMoviesSearch } from '../../utils/moviesSearch';
import './Movies.css';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

const Movies = ({
    onLikeClick,
    onDislikeClick,
    getMoreMovies,
    moviesListLength,
    savedMovies
}) => {

    const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies')) ?? []);
    const [localShortCheck, setLocalShortCheck] = useState(JSON.parse(localStorage.getItem('movies-check')) || false);
    const [localSearchValue, setLocalValue] = useState(localStorage.getItem('movies-search-value') || '');
    const [isLoading, setIsLoading] = useState(false);

    const filteredMovies = useMoviesSearch(movies, localShortCheck, localSearchValue);
    const [localMovies, setLocalMovies] = useState(JSON.parse(localStorage.getItem('filtered-movies')) ?? filteredMovies);

    const [errorText, setErrorText] = useState('Введите название фильма')

    function prealoderActivity() {
        setIsLoading(true)
        setTimeout(() =>
            setIsLoading(false), 300);
    };

    function handleMovieSearch(value) {
        prealoderActivity();
        if (movies.length === 0) {
            getMovies();
        };

        localStorage.setItem('movies-search-value', value);
        setLocalValue(value);
    };

    function getMovies() {
        prealoderActivity();
        moviesApi.getMovies()
            .then(moviesList => {
                if (moviesList.length) {
                    localStorage.setItem('movies', JSON.stringify(moviesList));
                    setMovies(moviesList);
                }
            })
            .catch(() => setErrorText('Произошла ошибка'))
            .finally(() => setIsLoading(false))
    };

    function handleClickOnShorts(checked) {
        localStorage.setItem('movies-check', checked);
        setLocalShortCheck(checked);
    };

    useEffect(() => {
        if (localMovies !== filteredMovies) {
            localStorage.setItem('filtered-movies', JSON.stringify(filteredMovies));
            setLocalMovies(filteredMovies);
        }
    }, [filteredMovies, localMovies]);

    useEffect(() => {
        if (movies.length && !filteredMovies.length) {
            setErrorText('Ничего не найдено');
        }
    }, [movies.length, filteredMovies.length]);

    return (
        <>
            <SearchForm
                handleSearch={handleMovieSearch}
                defaultValue={localSearchValue}
            />

            <FilterCheckBox
                onCheckChange={handleClickOnShorts}
                defaultChecked={localShortCheck}
                disabledCheck={!localSearchValue}
            />

            <section className='movies'>
                {isLoading
                    ? <Preloader />
                    : (<MoviesCardList
                        movies={localMovies}
                        onLikeClick={onLikeClick}
                        onDislikeClick={onDislikeClick}
                        savedMovies={savedMovies}
                        moviesListLength={moviesListLength} />)
                }
                {filteredMovies.length === 0 ? <p className='movies__notfound-text'>{ errorText }</p> :
                    filteredMovies.length > moviesListLength &&
                    <button
                        type='button'
                        className="more__btn"
                        onClick={getMoreMovies}
                    >
                        Ещё
                    </button>
                }
            </section>
        </>
    )
};

export default Movies;