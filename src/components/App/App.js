import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom"
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './App.css';
import mainApi from '../../utils/MainApi';
// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Profile from '../Profile/Profile';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
    const history = useHistory();

    const [savedMovies, setSavedMovies] = useState([]); // Состояние сохр.фильмов
    const [currentUser, setCurrentUser] = useState({}) // Состояние информации о пользователе
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Состояние авторизации пользователя
    const [registerErrorMessage, setRegisterErrorMessage] = useState(''); // для отображения ошибок при регистр.
    const [profileIsChanged, setProfileIsChanged] = useState(false);

    // Подгон под ширину экрана
    const [width, setWidth] = useState(window.innerWidth);
    const [listLength, setListLength] = useState(12);
    const [cardsNumber, setCardsNumber] = useState(4);

    function newWindowWidth() {
        setWidth(window.innerWidth);
    }

    function getMoreMovies() {
        setListLength(listLength + cardsNumber);
    }

    useEffect(() => {
        if (width >= 1140) {
            setCardsNumber(4);
            setListLength(12);
        } else if (width < 1140) {
            setCardsNumber(2);
            setListLength(8);
        } else if (width < 768) {
            setCardsNumber(1);
            setListLength(5);
        }
    }, [width]);

    useEffect(() => {
        window.addEventListener('resize', newWindowWidth);
        return () => window.removeEventListener('resize', newWindowWidth)
    }, []);

    // Проверка авторизованности
    useEffect(() => {
        tokenCheck();
        if (isLoggedIn) {
            getContent();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    // Проверка токена
    const tokenCheck = () => {
        const token = localStorage.getItem('jwt');
        if (token) {
            mainApi.getUserInfo()
                .then((res) => {
                    if (res) {
                        setIsLoggedIn(true);
                    } 
                })
                .catch((err) => console.log(err));
        } else {
            setIsLoggedIn(false);
            handleSignOut();
        }
    };

    // Получение информации о пользователе, если авторизован
    const getContent = () => {
        mainApi.getAllData()
            .then(([user, movies]) => {
                setSavedMovies(movies);
                setCurrentUser(user);
            })
            .catch(error => console.log(error));
    };

    // Регистрация
    function handleRegister({ name, email, password }) {
        mainApi.registration(name, email, password)
            .then((res) => {
                setCurrentUser({ name, email })
                history.push('/signin')
                handleLogin({ email, password })
            })
            .catch((err) => {
                setRegisterErrorMessage(err);
                console.log(err);
            })
    };

    // Авторизация
    const handleLogin = ({ email, password }) => {
        mainApi.authorization(email, password)
            .then((res) => {
                localStorage.setItem('jwt', res.token);
                localStorage.setItem('isLoggedIn', true)
                setIsLoggedIn(true);
                history.push('/movies')
            })
            .catch((err) => {
                setIsLoggedIn(false);
                console.log(err);
            })
    };

    // Выход
    const handleSignOut = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('isLoggedIn');
        localStorage.clear();
        setCurrentUser({});
        setSavedMovies([]);
        setIsLoggedIn(false);
        history.push('/');
    };

    // Обновление инф. о пользователе
    function handleUpdateUserInfo(data) {
        mainApi.updateUserInfo(data.name, data.email)
            .then((res) => {
                console.log(res)
                setCurrentUser(res);
                setProfileIsChanged(true);
            })
            .catch((err) => console.log(err))
            .finally(setProfileIsChanged(false))
    };

    // Добавить фильм в сохр.
    function handleSaveMovie(movie) {
        return mainApi.saveMovie(movie)
            .then((newMovie) => {
                setSavedMovies([...savedMovies, newMovie]);
                localStorage.setItem('saved-movies', JSON.stringify([...savedMovies, newMovie]))
            })
            .catch((err) => console.log(err))
    }

    // Удалить фильм из списка сохр.
    function handleDeleteFromFavourites(movie) {
        return mainApi.deleteMovieFromFavourite(movie)
            .then(() => {
                const resultSavedMovie = savedMovies.filter((i) => i._id !== movie._id);
                setSavedMovies(resultSavedMovie);
                localStorage.setItem('saved-movies', JSON.stringify(resultSavedMovie));
            })
            .catch(err => console.log(err.message))
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Switch>
                    <Route exact path='/' >
                        <Header path='/' isLoggedIn={isLoggedIn} />
                        <Main>
                            <Promo />
                            <AboutProject />
                            <Techs />
                            <AboutMe />
                            <Portfolio />
                        </Main>
                        <Footer />
                    </Route>

                    <ProtectedRoute exact path='/movies' isLoggedIn={isLoggedIn}>
                        <Header path='/movies' isLoggedIn={isLoggedIn} />
                        <Main>
                            <Movies
                                onLikeClick={handleSaveMovie}
                                onDislikeClick={handleDeleteFromFavourites}
                                savedMovies={savedMovies}
                                getMoreMovies={getMoreMovies}
                                moviesListLength={listLength}
                            />
                        </Main>
                        <Footer />
                    </ProtectedRoute>

                    <ProtectedRoute exact path='/saved-movies' isLoggedIn={isLoggedIn}>
                        <Header path='/saved-movies' isLoggedIn={isLoggedIn} />
                        <Main>
                            <SavedMovies
                                movies={savedMovies}
                                onDislikeClick={handleDeleteFromFavourites}
                            />
                        </Main>
                        <Footer />
                    </ProtectedRoute>

                    <ProtectedRoute exact path='/profile' isLoggedIn={isLoggedIn}>
                        <Header path='/profile' isLoggedIn={isLoggedIn} />
                        <Main>
                            <Profile
                                currentUser={currentUser}
                                onEditProfile={handleUpdateUserInfo}
                                onSignOut={handleSignOut} 
                                profileIsChanged={profileIsChanged}/>
                        </Main>
                    </ProtectedRoute>

                    <Route path='/signin'>
                        <Main>
                            <Login onLogin={handleLogin} isLoggedIn={isLoggedIn} />
                        </Main>
                    </Route>

                    <Route exact path='/signup'>
                        <Main>
                            <Register onRegister={handleRegister} registerErrorMessage={registerErrorMessage} isLoggedIn={isLoggedIn} />
                        </Main>
                    </Route>

                    <Route path='*'>
                        <NotFound />
                    </Route>

                </Switch>
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;
