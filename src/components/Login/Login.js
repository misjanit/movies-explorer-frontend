import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFormValidity from '../../utils/useForms';
import Preloader from "../Preloader/Preloader";
import './Login.css';

const Login = ({ onLogin }) => {

    const { values, errors, isValid, handleChange } = useFormValidity();
    const [isLoading, setIsLoading] = useState(false);

    function prealoderActivity() {
        setIsLoading(true)
        setTimeout(() =>
            setIsLoading(false), 500);
    };

    function formSubmit(evt) {
        evt.preventDefault();
        prealoderActivity();
        onLogin(values);
        setIsLoading(false);
    };

    return (
        <>
            {isLoading
                ? <Preloader />
                : <section className="login__container">
                    <img src={require("../../images/logo.svg").default}
                        className="login__logo"
                        alt="Логотип"
                        href="/"
                    />
                    <div className="login__top">
                        <h3 className="login__title">Рады видеть</h3>
                    </div>
                    <form className="login__form" onSubmit={formSubmit} errors={errors}>
                        <label className="login__input-container">
                            <p className="login__input-caption">E-mail</p>
                            <input
                                autoComplete="on"
                                id='email'
                                className="login__input"
                                name='email'
                                type="email"
                                value={values.email || ''}
                                onChange={handleChange}
                                minLength='2'
                                placeholder="Email"
                                required
                            />
                            <span
                                className={`${errors.email ? 'login__error-message' : 'login__error-message_unactive'}`}>
                                {errors.email}
                            </span>
                        </label>
                        <label className="login__input-container">
                            <p className="login__input-caption">Пароль</p>
                            <input
                                id='password'
                                className="login__input"
                                name='password'
                                type="password"
                                value={values.password || ''}
                                onChange={handleChange}
                                placeholder='Пароль'
                                required
                            />
                            <span
                                className={`${errors.password ? 'login__error-message' : 'login__error-message_unactive'}`}>
                                {errors.password}
                            </span>
                        </label>
                        <button
                            className={isValid ? 'login__submit-btn' : 'login__submit-btn login__submit-btn_unactive'}
                            disabled={isValid ? '' : true}
                            type='submit'>
                            Войти
                        </button>
                    </form>
                    <div className="login__login-container">
                        <h4 className="login__login-caption">Еще не зарегистрированы?</h4>
                        <Link to='/signup'>
                            <button className="login__signup-btn" type='button'>Регистрация</button>
                        </Link>
                    </div>
                </section>
            }
        </>
    )
}

export default Login;
