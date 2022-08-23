import React, { useState } from "react";
import './Header.css';
import '../../vendor/normalize.css';

const Header = (props) => {
    const [clicked, setClicked] = useState(true);

    function handlerClass() {
        if (!clicked) setClicked(true);
        else setClicked(false);
    }
    return (
        <section className={clicked ? 'header__container' : 'header__container-active-menu'}>
            <header className="header__main">
                <img src={require("../../images/logo.svg").default}
                    className={clicked ? 'header__logo' : 'header__logo-unactive'}
                    alt="Логотип"
                    href="/"
                />
                {/* Если бургер */}
                <button className="header__menu-button" onClick={handlerClass}>
                    <div className="header__burger-line-first" />
                    <div className="header__burger-line-second" />
                    <div className="header__burger-line-third" />
                    <div className="header__burger-line-fourth" />
                </button>

                <div className={clicked ? 'header__navigation-uncative' : 'header__navigation'}>
                    <div className={clicked ? 'header__wrapper-links-unactive' : 'header__wrapper-links'}>
                        <button className="header__main-page">Главная</button>
                        <button className="header__my-movies">Фильмы</button>
                        <button className="header__my-saved-movies">Сохраненные&nbsp;фильмы</button>
                    </div>
                    <div className="header__my-account">
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
                    </div>

                </div>
                {/* Если не бургер */}
                <div className="header__navigation-wrapper">
                    <div className="header__movies-wrapper">
                        <button className="header__all-movies">Фильмы</button>
                        <button className="header__saved-movies">Сохраненные&nbsp;фильмы</button>
                    </div>
                    <div className="header__my-account">
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
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Header;
