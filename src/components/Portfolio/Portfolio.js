import React from 'react';
import './Portfolio.css';
import '../../vendor/normalize.css';

const Portfolio = (props) => {
    return (
        <section className='portfolio__container'>
            <p className="portfolio__caption">Портфолио</p>
            <a href='https://github.com/misjanit/how-to-learn'
                className="portfolio__wrapper">
                <p className="portfolio__static-site">Статичный сайт</p>
                <img src={require("../../images/link-arrow.svg").default}
                    className="portfolio__link-arrow"
                    alt="Перейти по ссылке"
                    href="/" />
            </a>
            <a href='https://github.com/misjanit/russian-travel' className="portfolio__wrapper">
                <p className="portfolio__adaptive-site">Адаптивный сайт</p>
                <img src={require("../../images/link-arrow.svg").default}
                    className="portfolio__link-arrow"
                    alt="Перейти по ссылке"
                    href="/" />
            </a>
            <a href='https://github.com/misjanit/react-mesto-api-full' className="portfolio__wrapper">
                <p className="portfolio__app">Одностраничное приложение</p>
                <img src={require("../../images/link-arrow.svg").default}
                    className="portfolio__link-arrow"
                    alt="Перейти по ссылке"
                    href="/" />
            </a>
        </section>
    )
}

export default Portfolio;
