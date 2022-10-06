import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import '../../vendor/normalize.css';

const Header = ({ path = '' , isLoggedIn}) => {
    const isHomepage = path === "/";

    const [clicked, setClicked] = useState(true);

    function handlerClass() {
        if (!clicked) setClicked(true);
        else setClicked(false);
    }

    return (
        <>
            <section className={`header__container ${isHomepage ? 'header__container_background' : ''} ${isLoggedIn ? '' : 'header__container_none'} ${clicked ? 'header__container' : 'header__container-active-menu'}`}>
                <header className="header__main">
                    <Link to='/'>
                        <img src={require("../../images/logo.svg").default}
                            className={clicked ? 'header__logo' : 'header__logo-unactive'}
                            alt="Логотип"
                            href="/"
                        />
                    </Link>
                    {/* Если бургер */}
                    <button className="header__menu-button" type='button' onClick={handlerClass}>
                        <div className={clicked ? 'header__burger-line-first' : 'header__burger-line-first-hide'} />
                        <div className={clicked ? 'header__burger-line-second' : 'header__burger-line-second-close'} />
                        <div className={clicked ? 'header__burger-line-third' : 'header__burger-line-third-close'} />
                        <div className={clicked ? 'header__burger-line-fourth' : 'header__burger-line-fourth-hide'} />
                    </button>

                    <div className={clicked ? 'header__navigation-uncative' : 'header__navigation'}>
                        <div className={clicked ? 'header__wrapper-links-unactive' : 'header__wrapper-links'}>
                            <Link to='/' className="header__main-page">
                                Главная
                            </Link>
                            <Link to='/movies' className="header__my-movies">
                                Фильмы
                            </Link>
                            <Link to='/saved-movies' className="header__my-saved-movies">
                                Сохраненные&nbsp;фильмы
                            </Link>
                        </div>
                        <Link to='/profile' className="header__my-account">
                            <p className="header__account-caption">Аккаунт</p>
                            <div className="header__nav-avatar-wrapper">
                                <button className="header__nav-btn">
                                    <img src={require("../../images/nav-avatar.svg").default}
                                        className="header__nav-avatar"
                                        alt="Аватарка"
                                        href="/"
                                    />
                                </button>
                            </div>
                        </Link>

                    </div>
                    {/* Если не бургер */}
                    <div className="header__navigation-wrapper">
                        <div className="header__movies-wrapper">
                            <Link to='/movies'
                                className="header__all-movies">
                                Фильмы
                            </Link>
                            <Link to='/saved-movies'
                                className="header__saved-movies">
                                Сохраненные&nbsp;фильмы
                            </Link>
                        </div>
                        <Link to='/profile' className="header__my-account">
                            <p className="header__account-caption">Аккаунт</p>
                            <div className="header__nav-avatar-wrapper">
                                <button className="header__nav-btn">
                                    <img src={require("../../images/nav-avatar.svg").default}
                                        className="header__nav-avatar"
                                        alt="Аватарка"
                                        href="/"
                                    />
                                </button>
                            </div>
                        </Link>
                    </div>
                </header>
            </section>

            <header className='promo__header-container'>
                <div className={isLoggedIn ? 'promo__header_none' : 'promo__header'}>
                    <Link to='/'>
                        <img src={require("../../images/logo.svg").default}
                            className='promo__logo'
                            alt="Логотип"
                            href="/"
                        />
                    </Link>
                    <div className='promo__menu-container'>
                        <Link to="/signup" className="promo__register-btn">
                            Регистрация
                        </Link>
                        <Link to="/signin" className="promo__login-btn">
                            Войти
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
