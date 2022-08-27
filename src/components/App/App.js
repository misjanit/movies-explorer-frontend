import { useState } from "react";
import { Route, Switch } from "react-router-dom"

import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

import Profile from '../Profile/Profile';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

import Movies from "../Movies/Movies";
// import MoviesCard from "../MoviesCard/MoviesCard";
import SavedMovies from "../SavedMovies/SavedMovies";

import NotFound from '../NotFound/NotFound';
import Preloader from "../Preloader/Preloader";
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const onClick = (e) => {
        if (e.target !== document.querySelector(".preloader__round")) setIsLoading(true);
    };

    return (
        <div className="page">
            <Switch>
                <Route exact path='/' >
                    <Header exact path='/' />
                    <Main>
                        <Promo />
                        <AboutProject />
                        <Techs />
                        <AboutMe />
                        <Portfolio />
                    </Main>
                    <Footer />
                </Route>

                <Route exact path='/movies'>
                    <Header exact path='/movies' />
                    <Main>
                        <SearchForm />
                        <FilterCheckBox />
                        <Movies />
                    </Main>
                    <Footer />
                </Route>
                
                <Route exact path='/saved-movies'>
                    <Header exact path='/saved-movies' />
                    <Main>
                        <SearchForm />
                        <FilterCheckBox />
                        <SavedMovies />
                    </Main>
                    <Footer />
                </Route>

                <Route exact path='/profile'>
                    <Header exact path='/profile' />
                    <Main>
                        <Profile />
                    </Main>
                </Route>

                <Route path='/signin'>
                    <Main>
                        {isLoading ? <Login /> : <Preloader onClick={onClick} />}
                    </Main>
                </Route>

                <Route exact path='/signup'>
                    <Main>
                        {isLoading ? <Register /> : <Preloader onClick={onClick} />}
                    </Main>
                </Route>

                <Route path='/*'>
                    <NotFound />
                </Route>

            </Switch>
        </div>
    )
}

export default App;
