import React from "react";
// import { Link } from "react-router-dom";
import './Register.css';

const Register = (props) => {
    return (
        <section className="register__container">
            <img src={require("../../images/logo.svg").default}
                className="register__logo"
                alt="Логотип"
                href="/"
            />
            <div className="register__top">
                <h3 className="register__title">Добро пожаловать!</h3>
            </div>
            <form className="register__form">
                <p className="register__input-caption">Имя</p>
                <input
                    className="register__input"
                    minLength="2"
                    maxLength="30"
                    type="name"
                    required
                />
                <span className="register__error-message">Что-то пошло не так</span>
                <p className="register__input-caption">E-mail</p>
                <input
                    className="register__input"
                    type="email"
                    required
                />
                <span className="register__error-message">Что-то пошло не так</span>
                <p className="register__input-caption">Пароль</p>
                <input
                    className="register__input"
                    type="password"
                    required
                />
                <span className="register__error-message">Что-то пошло не так</span>
                <button
                    className="register__submit-btn"
                    disabled="isFormValid">
                    Зарегистрироваться
                </button>
            </form>
            <div className="register__login-container">
                <h4 className="register__login-caption">Уже зарегистрированы?</h4>
                <button className="register__login-btn" type='button'>Войти</button>
            </div>
        </section>
    )
}

export default Register;
