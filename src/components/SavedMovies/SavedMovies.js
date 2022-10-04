import { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import { useMoviesSearch } from '../../utils/moviesSearch';
import './SavedMovies.css';

const SavedMovies = ({
  movies,
  onDislikeClick
}) => {

  const [localShortCheck, setLocaShortlCheck] = useState(JSON.parse(localStorage.getItem('saved-movies-check')) || false);
  const [localSearchValue, setLocalValue] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const filteredMovies = useMoviesSearch(movies, localShortCheck, localSearchValue);
  const [localSavedMovies, setLocalSavedMovies] = useState(JSON.parse(localStorage.getItem('filtered-movies')) ?? filteredMovies);

  function prealoderActivity() {
    setIsLoading(true)
    setTimeout(() =>
      setIsLoading(false), 300);
  };

  function handleMovieSearch(value) {
    prealoderActivity()
    setLocalValue(value);
  };

  function handleClickOnShorts(checked) {
    localStorage.setItem('saved-movies-check', checked);
    setLocaShortlCheck(checked);
  };

  useEffect(() => {
    if (localSavedMovies !== filteredMovies) {
      localStorage.setItem('filtered-saved-movies', JSON.stringify(filteredMovies));
      setLocalSavedMovies(filteredMovies);
    }
  }, [filteredMovies, localSavedMovies]);

  return (
    <>
      <SearchForm
        handleSearch={handleMovieSearch}
        defaultValue={localSearchValue}
      />
      <FilterCheckBox
        onCheckChange={handleClickOnShorts}
        initialChecked={localShortCheck}
        disabledCheck={!localSearchValue}
      />
      <section className='movies'>
        {isLoading
          ? <Preloader />
          : <MoviesCardList
            movies={localSavedMovies}
            onDislikeClick={onDislikeClick}
          />
        }
        {filteredMovies.length === 0
          ? isLoading ? null : <p className='movies__notfound-text'>Ничего не найдено</p>
          : null
        }
      </section>
    </>
  )
};

export default SavedMovies;
