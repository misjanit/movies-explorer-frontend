import '../../vendor/normalize.css';
import React from "react";
import { Link } from "react-router-dom";
import './Promo.css'

const Promo = (props) => {
    return (
        <div className='promo__page'>
            <section className='promo__container'>
                
                <main className='promo__main'>
                    <div className='promo__title'>
                        <p className='promo__main-caption'>
                            Учебный проект студента факультета Веб-разработки.
                        </p>
                        <p className='promo__caption'>
                            Листайте ниже, чтобы узнать про этот проект и его создателя.
                        </p>
                    </div>
                    <img src={require("../../images/landing-logo.svg").default}
                        className='promo__landing-logo'
                        alt="Логотип"
                        href="/" />
                </main>
                <footer className='promo__footer'>
                    <button className='promo__footer-caption' type='button'>
                        Узнать больше
                    </button>
                </footer>
            </section>
        </div>
    )
}

export default Promo;
