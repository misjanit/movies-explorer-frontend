import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import filmTest from '../../images/film-test.png';

const Movies = () => {
    const defaultMovies = [
        {
            image: filmTest,
            title: "33 слова о дизайне",
            time: "1ч 42м",
            _id: 1,
            like: true,
        },
        {
            image: filmTest,
            title: "Киноальманах «100 лет дизайна»",
            time: "1ч 42м",
            _id: 2,
            like: true,
        },
        {
            image: filmTest,
            title: "В погоне за Бенкси",
            time: "1ч 42м",
            _id: 3,
            like: false,
        },
        {
            image: filmTest,
            title: "Баския: Взрыв реальности",
            time: "1ч 42м",
            _id: 4,
            like: false,
        },
        {
            image: filmTest,
            title: "Бег это свобода",
            time: "1ч 42м",
            _id: 5,
            like: true,
        },
        {
            image: filmTest,
            title: "Книготорговцы",
            time: "1ч 42м",
            _id: 6,
            like: false,
        },
        {
            image: filmTest,
            title: "Когда я думаю о Германии ночью",
            time: "1ч 42м",
            _id: 7,
            like: false,
        },
    ];

    return (
        <section className='movies'>
            <MoviesCardList movies={defaultMovies} />
        </section>
    )
}

export default Movies;