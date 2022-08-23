import React from "react";
import './Profile.css';
import '../../vendor/normalize.css';

const Profile = (props) => {
    return (
        <section className='profile__container'>
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