import React from 'react';
import './Portfolio.css';
import '../../vendor/normalize.css';

const Portfolio = (props) => {
    return (
        <section className='portfolio'>
            <p className="portfolio__caption">Портфолио</p>
            <ul className='portfolio__list'>
                <li className="portfolio__item" alt='Перейти по ссылке'>
                    <a className='portfolio__link'
                        href='https://github.com/misjanit/how-to-learn'
                        target='_blank' rel='noreferrer'>
                        Статичный сайт
                    </a>
                </li>
                <li className="portfolio__item" alt='Перейти по ссылке'>
                    <a className='portfolio__link'
                        href='https://github.com/misjanit/russian-travel'
                        target='_blank' rel='noreferrer'>
                        Адаптивный сайт
                    </a>
                </li>
                <li className="portfolio__item" alt='Перейти по ссылке'>
                    <a className='portfolio__link'
                        href='https://github.com/misjanit/react-mesto-api-full'
                        target='_blank' rel='noreferrer'>
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
