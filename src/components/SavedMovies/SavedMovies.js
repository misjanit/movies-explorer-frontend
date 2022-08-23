import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import filmTest from '../../images/film-test.svg';

const savedMovies = [
    {
      image: filmTest,
      title: "33 слова о дизайне",
      time: "1ч 42м",
      _id: 1,
      saved: true,
    },
    {
      image: filmTest,
      title: "Киноальманах «100 лет дизайна»",
      time: "1ч 42м",
      _id: 2,
      saved: true,
    },
    {
      image: filmTest,
      title: "В погоне за Бенкси",
      time: "1ч 42м",
      _id: 3,
      saved: true,
    },
  ];

const SavedMovies = () => {
    return (
        <section className='movies'>
            <MoviesCardList movies={savedMovies} />
        </section>
    )
}

export default SavedMovies;
