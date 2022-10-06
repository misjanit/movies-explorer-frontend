import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import useFormValidity from '../../utils/useForms';
import Preloader from "../Preloader/Preloader";
import './Register.css';

const Register = ({
    onRegister,
    isLoading,
    registerErrorMessage,
    isLoggedIn
}) => {

    const { values, errors, isValid, handleChange } = useFormValidity();
    const history = useHistory();

    function formSubmit(evt) {
        evt.preventDefault();
        onRegister(values);
    };

    useEffect(() => {
        if (isLoggedIn) {
            history.push('/')
        }
    }, [isLoggedIn, history]);

    return (
        <>
            {isLoading ? <Preloader /> :
                <section className="register__container" >
                    <Link to='/'>
                        <img src={require("../../images/logo.svg").default}
                            className="register__logo"
                            alt="Логотип"
                            href="/"
                        />
                    </Link>
                    <div className="register__top">
                        <h3 className="register__title">Добро пожаловать!</h3>
                    </div>
                    <form className="register__form" onSubmit={formSubmit} errors={registerErrorMessage}>
                        <label className="register__input-container">
                            <p className="register__input-caption">Имя</p>
                            <input
                                autoComplete="off"
                                pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
                                id='name'
                                className="register__input"
                                name='name'
                                type="text"
                                value={values.name || ''}
                                onChange={handleChange}
                                minLength="2"
                                maxLength="30"
                                placeholder="Имя"
                                required
                            />
                            <span
                                className={`${errors.name ? 'register__error-message' : 'register__error-message_unactive'}`}>
                                {errors.name}
                            </span>
                        </label>
                        <label className="register__input-container">
                            <p className="register__input-caption">E-mail</p>
                            <input
                                autoComplete="off"
                                id='email'
                                className="register__input"
                                name='email'
                                type="email"
                                value={values.email || ''}
                                onChange={handleChange}
                                minLength='2'
                                placeholder="Email"
                                required
                            />
                            <span
                                className={`${errors.email ? 'register__error-message' : 'register__error-message_unactive'}`}>
                                {errors.email}
                            </span>
                        </label>
                        <label className="register__input-container">
                            <p className="register__input-caption">Пароль</p>
                            <input
                                autoComplete="off"
                                id='password'
                                className="register__input"
                                name='password'
                                type="password"
                                value={values.password || ''}
                                onChange={handleChange}
                                minLength='5'
                                placeholder='Пароль'
                                required
                            />
                            <span className={`${errors.password ? 'register__error-message' : 'register__error-message_unactive'}`}>
                                {errors.password}
                            </span>
                        </label>
                        <button
                            className={isValid ? 'register__submit-btn' : 'register__submit-btn register__submit-btn_unactive'}
                            disabled={isValid ? '' : true}
                            type="submit">
                            Зарегистрироваться
                        </button>
                    </form>
                    <div className="register__login-container">
                        <h4 className="register__login-caption">Уже зарегистрированы?</h4>
                        <Link to='/signin'>
                            <button className="register__login-btn" type='button'>Войти</button>
                        </Link>
                    </div>
                </section>
            }
        </>
    )
};

export default Register;
