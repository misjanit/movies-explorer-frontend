import React from "react";
// import { Link } from "react-router-dom";
import './Login.css';

const Login = (props) => {
    return (
        <section className="login__container">
            <img src={require("../../images/logo.svg").default}
                className="login__logo"
                alt="Логотип"
                href="/"
            />
            <div className="login__top">
                <h3 className="login__title">Рады видеть</h3>
            </div>
            <form className="login__form">
                <p className="login__input-caption">E-mail</p>
                <input
                    className="login__input"
                    type="email"
                    required
                />
                <span className="login__error-message">Что-то пошло не так</span>
                <p className="login__input-caption">Пароль</p>
                <input
                    className="login__input"
                    type="password"
                    required
                />
                <span className="login__error-message">Что-то пошло не так</span>
                <button
                    className="login__submit-btn"
                    disabled="isFormValid"
                >Войти</button>
            </form>
            <div className="login__login-container">
                <h4 className="login__login-caption">Еще не зарегистрированы?</h4>
                <button className="login__login-btn">Регистрация</button>
            </div>
        </section>
    )
}

export default Login;
