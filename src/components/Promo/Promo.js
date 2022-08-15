import '../../vendor/normalize.css';
import React from "react";
import './Promo.css'

const Promo = (props) => {
    return (
        <div className='promo__page'>
            <section className='promo__container'>
                <header className='promo__header'>
                    <img src={require("../../images/logo.svg").default}
                        className='promo__logo'
                        alt="Логотип"
                        href="/"
                    />
                    <div className='promo__menu-container'>
                        <button className='promo__register-btn'>Регистрация</button>
                        <button className='promo__login-btn'>Войти</button>
                    </div>
                </header>
                <main className='promo__main'>
                    <div className='promo__title'>
                        <p className='promo__main-caption'>Учебный проект студента факультета Веб-разработки.</p>
                        <p className='promo__caption'>Листайте ниже, чтобы узнать про этот проект и его создателя</p>
                    </div>
                    <img src={require("../../images/landing-logo.svg").default}
                        className='promo__landing-logo'
                        alt="Логотип"
                        href="/" />
                </main>
                <footer className='promo__footer'>
                    <button className='promo__footer-caption'>Узнать больше</button>
                </footer>
            </section>
        </div>
    )
}

export default Promo;
