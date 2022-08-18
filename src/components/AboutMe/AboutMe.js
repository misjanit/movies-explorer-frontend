import React from "react";
import './AboutMe.css';
import '../../vendor/normalize.css';

const AboutMe = (props) => {
    return (
        <section className='aboutme__container'>
            <header className='aboutme__header'>
                <h3 className='aboutme__title'>Студент</h3>
            </header>
            <main className='aboutme__main'>
                <div className="aboutme__student-container">
                    <div className="aboutme__student-wrapper">
                        <p className="aboutme__student-name">Андрей</p>
                        <p className="aboutme__student-caption">Студент, 23 года</p>
                        <p className="aboutme__student-description">Я родился и живу в Саратове,
                            закончил факультет экономики СГУ.
                            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
                            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                            После того, как прошёл курс по веб-разработке,
                            начал заниматься фриланс-заказами и ушёл
                            с постоянной работы.</p>
                        <div className="aboutme__student-socials">
                            <a href="/" className="aboutme__socials-telegram">
                                Telegram
                            </a>
                            <a href="/" className="aboutme__socials-github">
                                GitHub
                            </a>
                        </div>
                    </div>
                    <img src={require("../../images/student-avatar.svg").default}
                        className="aboutme__student-avatar"
                        alt="Аватар"
                        href="/"
                    />
                </div>
                <p className="aboutme__portfolio-caption">Портфолио</p>
                <div className="aboutme__portfolio-wrapper">
                    <p className="aboutme__portfolio-static-site">Статичный сайт</p>
                    <img src={require("../../images/link-arrow.svg").default}
                        className="aboutme__link-arrow"
                        alt="Перейти по ссылке"
                        href="/"/>
                </div>
                <div className="aboutme__portfolio-wrapper">
                    <p className="aboutme__portfolio-adaptive-site">Адаптивный сайт</p>
                    <img src={require("../../images/link-arrow.svg").default}
                        className="aboutme__link-arrow"
                        alt="Перейти по ссылке"
                        href="/"/>
                </div>
                <div className="aboutme__portfolio-wrapper">
                    <p className="aboutme__portfolio-app">Одностраничное приложение</p>
                    <img src={require("../../images/link-arrow.svg").default}
                        className="aboutme__link-arrow"
                        alt="Перейти по ссылке"
                        href="/"/>
                </div>
            </main>
        </section >
    )
}

export default AboutMe;
