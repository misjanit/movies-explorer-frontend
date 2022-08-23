import React from "react";
import './Footer.css';
import '../../vendor/normalize.css';

const Footer = (props) => {
    return (
        <footer className="footer__container">
            <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__content">
                <p className="footer__year">© 2022</p>
                <div className="footer__socials">
                    <p className="footer__yandex-practicum">Яндекс.Практикум</p>
                    <p className="footer__github">GitHub</p>
                    <p className="footer__vk">VK</p>
                    <p className="footer__year-mobile">© 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
