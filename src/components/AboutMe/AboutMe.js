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
                        <p className="aboutme__student-caption">Фронтенд-разработчик, 23 года</p>
                        <p className="aboutme__student-description">
                            Я живу Екатеринбурге,
                            закончил факультет юриспруденции РАНХиГС.
                            Живу с девушкой, хотим собаку как на фотографии.
                            После того, как прошёл курс по веб-разработке,
                            нашёл работу в Уральском Федеральном Университете, 
                            занимаюсь разработкой онлайн-курсов.
                            </p>
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
                
            </main>
        </section >
    )
}

export default AboutMe;
