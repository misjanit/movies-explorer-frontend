import React, { useState } from "react";
import './Profile.css';
import '../../vendor/normalize.css';

const Profile = (props) => {
    const [clicked, setClicked] = useState(true);

    function handlerClass() {
        if (!clicked) setClicked(true);
        else setClicked(false);
    }

    return (
        <section className={clicked ? 'profile__container' : 'profile__container-active-menu'}>
            <header className="profile__header">
                <img src={require("../../images/logo.svg").default}
                    className={clicked ? 'profile__logo' : 'profile__logo-unactive'}
                    alt="Логотип"
                    href="/"
                />
                {/* Если бургер */}
                <button className="profile__menu-button" onClick={handlerClass}>
                    <div className="profile__burger-line-first" />
                    <div className="profile__burger-line-second" />
                    <div className="profile__burger-line-third" />
                    <div className="profile__burger-line-fourth" />
                </button>

                <div className={clicked ? 'profile__navigation-uncative' : 'profile__navigation'}>
                    <div className={clicked ? 'profile__wrapper-links-unactive' : 'profile__wrapper-links'}>
                        <button className="profile__main-page">Главная</button>
                        <button className="profile__my-movies">Фильмы</button>
                        <button className="profile__my-saved-movies">Сохраненные&nbsp;фильмы</button>
                    </div>
                    <div className="profile__my-account">
                        <p className="profile__account-caption">Аккаунт</p>
                        <div className="profile__nav-avatar-wrapper">
                            <button className="profile__nav-btn">
                                <img src={require("../../images/nav-avatar.svg").default}
                                    className="profile__nav-avatar"
                                    alt="Аватарка"
                                    href="/"
                                />
                            </button>
                        </div>
                    </div>

                </div>
                {/* Если не бургер */}
                <div className="profile__navigation-wrapper">
                    <div className="profile__movies-wrapper">
                        <button className="profile__all-movies">Фильмы</button>
                        <button className="profile__saved-movies">Сохраненные&nbsp;фильмы</button>
                    </div>
                    <div className="profile__my-account">
                        <p className="profile__account-caption">Аккаунт</p>
                        <div className="profile__nav-avatar-wrapper">
                            <button className="profile__nav-btn">
                                <img src={require("../../images/nav-avatar.svg").default}
                                    className="profile__nav-avatar"
                                    alt="Аватарка"
                                    href="/"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main className="profile__main">
                <h3 className="profile__title">Привет, Андрей!</h3>
                <div className="profile__username-wrapper">
                    <p className="profile__username">Имя</p>
                    <p className="profile__name-of-user">Андрей</p>
                </div>
                <div className="profile__line" />
                <div className="profile__email-wrapper">
                    <p className="profile__email">E-mail</p>
                    <p className="profile__email-of-user">pochta@yandex.ru</p>
                </div>
            </main>
            <footer className="profile__control-menu">
                <button className="profile__edit-profile-btn">Редактировать</button>
                <button className="profile__logout-btn">Выйти из аккаунта</button>
            </footer>
        </section>
    )
}

export default Profile;